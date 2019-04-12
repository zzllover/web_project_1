function Observer(data) { //观察者
    this.data = data; //将data对象保存到Observer实例对象上
    //开始对data进行监视
    this.walk(data);
}

Observer.prototype = {
    walk: function(data) {
        var me = this;
        Object.keys(data).forEach(function(key) { //遍历data中所有的属性
            me.convert(key, data[key]);//参数为其中的 键 ，值
        });
    },
    convert: function(key, val) {
        this.defineReactive(this.data, key, val);//对指定的属性实现响应式数据绑定
    },

    defineReactive: function (data, key, val) {
        //创建对应的dep对象 dependency
        var dep = new Dep();
        var childObj = observe(val);//递归调用，实现对data所有层次的属性的数据劫持

        Object.defineProperty(data, key, {//重新定义data中的这个属性，主要目的是添加 get set
            enumerable: true, // 可枚举
            configurable: false, // 不能再define，即不要覆盖下面定义的get set
            get: function() {    //返回值，建立dep 与 watcher之间的关系
                if (Dep.target) {
                    dep.depend();//建立关系
                }
                return val;
            },
            set: function(newVal) { //监视key属性的变化，更新界面
                if (newVal === val) {
                    return;
                }
                val = newVal;
                // 新的值是object的话，进行监听
                childObj = observe(newVal);
                // 通知所有相关的订阅者，即watcher
                dep.notify();
            }
        });
    }
};

function observe(value, vm) {
    //被观察的必须是一个对象
    if (!value || typeof value !== 'object') {//value不是对象就不用继续观察了
        return;
    }

    //创建对应的观察者
    return new Observer(value);//观察data，递归的调用
};


var uid = 0;//全局id

function Dep() { //依赖
    this.id = uid++;
    this.subs = []; //订阅者，里面的元素都是 watcher
}

Dep.prototype = {
    //添加watcher到dep中
    addSub: function(sub) {
        this.subs.push(sub);
    },
    //去建立dep和watcher的关系
    depend: function() {
        Dep.target.addDep(this);
    },

    removeSub: function(sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function () {
        //遍历所有watcher
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};

Dep.target = null;