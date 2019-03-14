
// 1 定义
//闭包是由函数以及创建该函数的词法环境组合而成，这个环境包含了这
//个闭包创建时所能访问的所有局部变量。比如在函数里面返回一个函数

//eg1 在函数里面返回一个函数
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
      alert(name);
  }
  return displayName;
}

//eg2 在函数里面返回一个函数
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

// 2 优缺点 
// 优点是：可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中，不会在f1调用后被自动清除。使用闭包实现模块化
// 缺点是：闭包在处理速度和内存消耗方面对脚本性能具有负面影响，IE中可能导致内存泄露。解决方法是。在退出函数之前，将不使用的
// 局部变量全部删除


// 3 应用场景

//eg1 循环给dom节点绑定事件
for(var i = 0, len = btns.length; i < len; i++) {
  (function(i) {
      btns[i].onclick = function() {
          alert(i);
      }
  }(i))
}
//eg2 封装变量
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

//4 内存消耗处理、释放闭包中变量
// 闭包函数=NULL




