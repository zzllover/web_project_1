

let arr = [2, 4, 6, 8];

let value = 100
let res = arr.reduce(function (val, v) {
  console.log(val, v)
  return v + val;
});
console.log(res); //20

let res1 = arr.reduce(function (val, v) {
  return v + val;
}, value); //120

//在此再次总结 最后一次

 //   Array.reduce(function(v1,v2){},value);
 //   第一个参数为函数，第二个参数为一个变量
 //   如果value缺省，那么 刚开始： v1 v2为数组的 a[0] a[1]
 //                      接着就是 v1 v2   func(a[0],a[1]) a[2] 即函数的返回值和a[2]
 //         


