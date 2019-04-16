
//函数提升与变量提升的优先级

//js 函数为一等公民，会优先提升，但是仅限于函数声明才有变量提升

console.log(a);//[Function: a]
console.log(b);//undefined
var a;

function a() {
  console.log(111)
}

console.log(a)//[Function: a]
a(); //1111  且不会被变量声明覆盖

var b = function () {
  console.log(222)
}

a = 2333;

console.log(a)//2333 会被变量赋值之后覆盖。
//a(); //a is not a function
