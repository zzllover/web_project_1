function Watcher(vm, expOrFn, cb) { //订阅者
    this.cb = cb; //回调，当需要更新界面时回调，更新界面的回调
    this.vm = vm;
    this.expOrFn = expOrFn; //对应的表达式 name  wife.name
    this.depIds = {};       //相关的n个dep的容器对象

    if (typeof expOrFn === 'function') {
        this.getter = expOrFn;
    } else {
        this.getter = this.parseGetter(expOrFn.trim());
    }

    this.value = this.get(); //当前表达式对应的value初始值
}

Watcher.prototype = {
    update: function() {
        this.run();
    },
    run: function() {
        var value = this.get();
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            //调用回调函数
            this.cb.call(this.vm, value, oldVal);
        }
    },
    addDep: function(dep) {
        // 1. 每次调用run()的时候会触发相应属性的getter
        // getter里面会触发dep.depend()，继而触发这里的addDep
        // 2. 假如相应属性的dep.id已经在当前watcher的depIds里，说明不是一个新的属性，仅仅是改变了其值而已
        // 则不需要将当前watcher添加到该属性的dep里
        // 3. 假如相应属性是新的属性，则将当前watcher添加到新属性的dep里
        // 如通过 vm.child = {name: 'a'} 改变了 child.name 的值，child.name 就是个新属性
        // 则需要将当前watcher(child.name)加入到新的 child.name 的dep里
        // 因为此时 child.name 是个新值，之前的 setter、dep 都已经失效，如果不把 watcher 加入到新的 child.name 的dep中
        // 通过 child.name = xxx 赋值的时候，对应的 watcher 就收不到通知，等于失效了
        // 4. 每个子属性的watcher在添加到子属性的dep的同时，也会添加到父属性的dep
        // 监听子属性的同时监听父属性的变更，这样，父属性改变时，子属性的watcher也能收到通知进行update
        // 这一步是在 this.get() --> this.getVMVal() 里面完成，forEach时会从父级开始取值，间接调用了它的getter
        // 触发了addDep(), 在整个forEach过程，当前wacher都会加入到每个父级过程属性的dep
        // 例如：当前watcher的是'child.child.name', 那么child, child.child, child.child.name这三个属性的dep都会加入当前watcher


        //判断 dep 与watcher关系是否已经建立
        if (!this.depIds.hasOwnProperty(dep.id)) {
            //将watcher添加到dep   //用于更新阶段
            dep.addSub(this);
            //将dep添加到watcher中 //用于防止重复建立关系 this.depIds = {}; 使用对象的原因对应  hasOwnProperty
            this.depIds[dep.id] = dep;
        }
    },


    //得到表达式对应的值
    get: function () {
        //给dep指定当前的watcher
        Dep.target = this;

        //获取表达式的值，内部调用get建立dep与watcher的关系
        var value = this.getter.call(this.vm, this.vm);

        //去除dep中指定的当前watcher
        Dep.target = null;
        return value;
    },

    parseGetter: function(exp) {
        if (/[^\w.$]/.test(exp)) return; 

        var exps = exp.split('.');

        return function(obj) {
            for (var i = 0, len = exps.length; i < len; i++) {
                if (!obj) return;
                obj = obj[exps[i]];
            }
            return obj;
        }
    }
};