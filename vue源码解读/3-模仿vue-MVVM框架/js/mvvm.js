function MVVM(options) {
    this.$options = options || {};
    var data = this._data = this.$options.data;//重新包装data
    var me = this; //暂存this

    // 数据代理
    // 实现 vm.xxx -> vm._data.xxx
    Object.keys(data).forEach(function(key) { //遍历data所有的属性
        me._proxyData(key);//代理所有的属性
    });

    this._initComputed();

    observe(data, this); 

    this.$compile = new Compile(options.el || document.body, this)//创建编译对象
}

MVVM.prototype = { //原型链上的定义
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    _proxyData: function(key, setter, getter) {
        var me = this;
        setter = setter || 
            
        //数据代理的核心实现
        Object.defineProperty(me, key, {
            configurable: false,
            enumerable: true,
            
            //代理data的读操作 即当调用vm.xx时，实际返回为vm._data.xx
            get: function proxyGetter() {
                return me._data[key];
            },
            //代理data的写操作 即当调用vm.xx = "yy",实际操作是 vm._data.xx = "yy"
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    },

    _initComputed: function() {
        var me = this;
        var computed = this.$options.computed;
        if (typeof computed === 'object') {
            Object.keys(computed).forEach(function(key) {
                Object.defineProperty(me, key, {
                    get: typeof computed[key] === 'function' 
                            ? computed[key] 
                            : computed[key].get,
                    set: function() {}
                });
            });
        }
    }
};