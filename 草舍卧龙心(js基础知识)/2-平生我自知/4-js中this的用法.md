
# this关键字的用法

```js
var obj ={a:1,b:function () {alert(this.a)}};
var fun =obj.b;
fun();
```

this的行为有时候会显得极其诡异，让人感到困惑，但只需要记住 this的值要等到代码真正执行时才能确定
同时this的值具体有以下几种情况：

**new 调用**时指的是**被构造的对象**

**call、apply**调用，指向我们**指定的对象**

**对象调用**，如执行obj.b()，**this指向obj**

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

## 普通函数中的this：

1. 默认情况下（非严格模式），没有找到直接的调用者，this指向的是window全局环境

2. 严格模式（'use strict'），没有找到直接调用者,this就是undefined

3. this总是代表他的直接调用者，比如：obj.fun,那么fun内部的this指的就是obj

4. 使用call，apply，bind绑定的this指向的是绑定的对象
