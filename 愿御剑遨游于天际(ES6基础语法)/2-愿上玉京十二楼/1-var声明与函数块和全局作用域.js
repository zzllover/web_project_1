
//var关键字  变量提升机制--Hoisting机制

/**
 * 函数作用域  -----块
 * 或者
 * 全局作用域  ------块
 * 通过关键字var声明的变量，无论实际是在哪里声明的，都会被当作
 * 当前作用域顶部声明的变量
 * 
 */

function name(params) {
  
  if (condition) {
    var value = "bu"
  } else {
    console.log(value)//能够访问value,值为undefined
  }
}

//=====等价于

function name(params) {
  var value;
  var res;
  if (condition) {
    value = "bu"
  } else {
    console.log(value)//能够访问value,值为undefined
  }
}

//res = "111";

{
  {
    var r1;
  }
  
}
//console.log(res)

//只有var声明才会具有这样 的提升效果

if (true) {
  var r3;
}

var r4;

//r1 r3 r4均是一样的
console.log(r3)