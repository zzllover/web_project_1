
let  arr = [1,2,3]
var max = Math.max.apply(null, arr);
var min = Math.min.apply(null, arr);//利用 apply的特点
                  //本来max,min接收的是 max(n1,n2,n3,.....)
                  //使用apply第二个参数数组，解析为参数群

//利用ES6的语法
let max1 = Math.max(...arr);//扩展运算符，打散数组，出现在等号右边
//console.log(max1, max, min)


console.log(arr)    //输出为数组
console.log(...arr);//直接将arr剥离为单个元素，打散数组
