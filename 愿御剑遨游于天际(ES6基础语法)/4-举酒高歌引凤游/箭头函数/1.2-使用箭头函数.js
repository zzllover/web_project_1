
function Person(name) { //构造函数
  this.name = name
}

Person.prototype.getName = function () {
  console.log(this.name)
}

let p1 = new Person("PXM")
p1.getName()
console.log(typeof p1) //object