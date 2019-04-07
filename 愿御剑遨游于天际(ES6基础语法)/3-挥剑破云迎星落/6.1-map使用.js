
let arr = [1, 2, 3];

let narr = arr.map(function (value, index, arr) {
  //map返回的长度确实是按照对应下标赋值生成数组的
  //即返回值是长度一样的数组，值为对应的返回值
  if (index==0 ||index==2) {
    return value
  } else {
    return arr
  }
})

console.log(narr) //[ 1, [ 1, 2, 3 ], 3 ]