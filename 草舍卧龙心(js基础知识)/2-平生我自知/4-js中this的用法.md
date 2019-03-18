
# this关键字的用法

```js
var obj ={a:1,b:function () {alert(this.a)}};
var fun =obj.b;
fun();
```

this的行为有时候会显得极其诡异，让人感到困惑，但只需要记住 this的值要等到代码真正执行时才能确定
同时this的值具体有以下几种情况：

new 调用时指的是被构造的对象

call、apply调用，指向我们指定的对象

对象调用，如执行obj.b()，this指向obj

默认的，指向全局变量window(相当于执行window.fun())

这样看来，当你执行fun()的时候，以上1,2点均不满足。
第3点,因为this是运行时确定的，而我们执行fun()，等同于windown.fun()(与obj没有任何关系)，自然的this指向window，而window没有定义变量a，结果是undefined。

```js
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log(this.foo);  //指向这个object
        console.log(self.foo);  //指向这个object
        (function() {
            console.log(this.foo);  //这个IIFE(立即执行函数表达式)中的this指向window。
            console.log(self.foo);  
            //因为这个匿名函数所处的上下文中没有self，所以通过作用域链向上查找，从包含它的父函数中找到了指向myObject对象的self。
        }());
    }
};
myObject.func();
```
