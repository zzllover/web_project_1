
var obj1 = {}
var obj2 = new Object()
var obj3 = new f1()

function f1() { }
var f2 = function () { }
var f3 = new Function('str', 'console.log(str)')

console.log(typeof obj1)
console.log(typeof obj2)
console.log(typeof obj3)

console.log(typeof f1)
console.log(typeof f2)
console.log(typeof f3)