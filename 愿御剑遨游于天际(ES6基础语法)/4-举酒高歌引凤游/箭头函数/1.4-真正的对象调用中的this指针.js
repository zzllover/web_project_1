var name = "The Window";
var object = {
  name: "My Object",
  getNameFunc: function () {
    var that = this;
    //console.log(this)
    return function () {
      return that.name;
    };
  }
};

console.log(object.getNameFunc())//对象调用，所以函数内的this指向对象

//知识点总结**************************//
/**
 * let myGet = object.getNameFunc//仅仅只是赋了一个函数给这个变量而已
 * myGet()//这样执行会导致函数体内的this指向全局
 */

