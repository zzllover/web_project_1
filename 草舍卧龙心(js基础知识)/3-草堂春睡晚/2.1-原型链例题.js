var tmp = {};//对象
var A = function() {};//函数
A.prototype = tmp;//函数的原型指向一个对象

var a = new A();
A.prototype = {};

var b = Object.create(tmp);
b.constructor = A.constructor;

console.log(a instanceof A); //false
console.log(b instanceof A); //false