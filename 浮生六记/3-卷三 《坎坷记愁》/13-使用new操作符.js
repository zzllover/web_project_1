
function A() {
  this.name = "Jim";
}

let a = new A();

//问：使用 new操作符的时候发生了什么？

//就发生了四件事：

/**
 * 
  var obj = {};
  obj.__proto__ = A.prototype
  A.call(obj)
  return obj;
 */