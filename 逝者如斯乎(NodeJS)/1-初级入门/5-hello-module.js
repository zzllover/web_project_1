
//只是想把一个对象封装到模块中

function Hello() {
  let name;
  this.setName = function (n) {
    name = n;
  }
  this.sayHello = function () {
    console.log('Hello:' + name)
  }
}

module.exports = Hello