
const singleton = function (name) {
  this.name = name;
  this.instance = null
}

singleton.prototype.getName = function () {
  console.log(this.name)
}

singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance  = new singleton(name)
  }
  return this.instance
}

const a = singleton.getInstance('a')
const b = singleton.getInstance('b')

console.log(a === b) //true
a.getName()  //a
b.getName()  //a