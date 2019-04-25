
/// let关键字声明
// 既不存在提升机制，也被限制在 {}中
// 同一作用域也不能重声明

var r1;

//let r1; //重声明

//const r2; //Missing initializer in const declaration


//使用const声明对象,不可改变绑定
const obj = {
  name:"NMSl"
}

obj.name = "11"
//obj = {}// Assignment to constant variable.


//====循环中的函数
/*
var funcs = [];

for (var index = 0; index <10; index++) {
  //const element = array[index];
  funcs.push(function () {
    console.log(index)
  })
}

funcs.forEach(function (func) {
  func()
})
*/
/*
var funcs = []

//立即调用函数表达式（IIFE）,强制生成计数器副本

for (var index = 0; index < 10; index++) {
  //const element = array[index];
  funcs.push((function (params) {
    return function () {
      console.log(params)
    }  
  }(index)))
}

funcs.forEach(function (func) {
  func()
})*/


var funcs = [],
  obj1 = {
    a: true,
    b: false,
    c: false
    
  }
    
for (let key in obj1) { //创建新的key副本，而不是修改，因此可以用const key
  // if (object.hasOwnProperty(key)) {
  //   const element = object[key];
    
  // }
  funcs.push(function () {
    console.log(key)
  })
}

funcs.forEach(function (func) {
  func()
})

//如果希望在浏览器全局环境下定义变量，仍可使用 var
//如果不想创建全局属性，则使用let const较为妥当


