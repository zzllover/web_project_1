'use strict'
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;   //如果不是严格模式，赋值无效而已
                //如果是严格模式，赋值错误，直接报错
console.log(obj.x)


