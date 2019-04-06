//Object.prototype和Function.prototype对象是由引擎创建的，
//所以不是所有对象都是Object实例，但是Object的实例一定是对象

function A() {
}

let a = new A()
console.log(a instanceof Object)//true