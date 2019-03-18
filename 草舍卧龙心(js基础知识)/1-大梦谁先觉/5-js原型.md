# 原型

```javascript
var F = function(){};
Object.prototype.a = function(){};
Function.prototype .b = function(){};
var f = new F();
```

//原型的例子之二
//就近原则，自己有，原型也有，但是就用自己的，自己没有才开始找

```js
function A() {

    this.do=function() {return ‘foo’;};

}
A.prototype=function() {
    this.do=function() {return ‘bar’};
};
var x=new A().do();
//x 的值是：
```

只有实例对象上不存在的属性和方法才会去原型上查找

//原型的例子之二

```js
var A = {n:4399}
var B = function(){this.n = 9999};
var C = function(){var n= 3999}
B.prototype = A;
C.prototype = A;
var b= new B()
var c = new C()
A.n ++ ;
console.log(b.n) //
console.log(c.n)

/*
在查找 b.n 是首先查找 b 对象自身有没有 n 属性，如果没有会去原型（prototype）上查找
当执行 var b = new B() 时，函数内部 this.n=9999(此时this指向b) 返回b对象，b对象有自身的n属性，
所以返回 9999

console.log(c.n);
同理
当执行 var c = new C() 时，c对象没有自身的n属性，向上查找，找到原型 （prototype）上的 n 属性，
因为 A.n++(此时对象A中的n为4400)， 所以返回4400
*/
```
