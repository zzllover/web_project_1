//javascript函数式编程
/*
函数式特性：

      运算过程尽量写成一系列嵌套的函数
      函数是"第一等公民": 函数可以是变量，在JavaScript中就不用解释了
      没有"副作用"： 即不改变函数外部状态*/
function add(a, b) {
  return a + b;
}
//柯里化
//将拥有多个参数的函数Currying化为拥有单一参数的函数形式。
function curring_add(x) {
  //返回的是函数，即函数在内存中，x也保存在内存中。
  return function (y) {//利用的确是是闭包的原理
    return x + y;
  }
}
console.log(curring_add(10)(1));