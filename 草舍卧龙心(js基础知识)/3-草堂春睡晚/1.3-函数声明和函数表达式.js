
A();
function A() { //函数声明，会有提升至顶部的
  console.log("AAA")
}
B()
var B = function () { // 函数表达式，函数位于一个初始化语句中，
                      // B在执行函数所在语句之前变量B中不会保存对函数的引用。
  console.log("BBB")
}