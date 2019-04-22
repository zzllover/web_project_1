
//深入柯里化

//1. 首先明白数组的reduce方法

let arr = [1,2,3,4,15];
let res = arr.reduce((a, b) => {
  //console.log(a, b, a + b);
  return a + b;
},0)

//reduce函数的 返回结果类型 和 传入的初始值相同
//console.log(res);

let res1 = arr.reduce((a, b) => {
  a.sum += b;
  return a;//最终会返回 a 
}, { sum: 100 })//传入初始值

console.log(res1);


//柯里化实现函数的累加

// var curringAdd = function () {
//   let args = [...arguments];
//   let add = function () {
//     args = [...args, ...arguments];
//   }
//   add.valueOf = function () {
//   }
// }