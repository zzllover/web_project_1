
//['1', '2', '3'].map(parseInt) 解析

//console.log(['1', '2', '3'].map(parseInt)) //[ 1, NaN, NaN ]

console.log(parseInt('16', 16));//output :22 = 16+6
console.log(parseInt('11', 11));//output :12 = 11 + 1 

//总结最后都需要输出10进制的答案

// 11(11) = 12(10)
// 16(16) = 22(10)

console.log(parseInt('8', 9));//output :8  = 8

// 8(9) = 8(10)

console.log(parseInt('9', 9));//output :NaN
// 9(9) ? 错误！9进制表示的数，各个位置上不可能出现9

console.log(parseInt('18', 9));//output :17 = 9 + 8
// 18(9) = 17(10) //正确各个位置均小于18(9)9

console.log(parseInt('3', 2)); // output :NaN
// 3(2)?错误因为2进制各个位数必须小与 2

//关于 map的使用

/*
首先让我们回顾一下，map函数的第一个参数callback：
*/
//JS的映射与解析

const intValue = parseInt(string[ , radix]);

var new_array = arr.map(function callback(currentValue[, index[, array]]) {
  
  // Return element for new_array
}[, thisArg])

//map用法
/*
可以看到callback回调函数需要三个参数, 我们通常只使用第一个参数 (其他两个参数是可选的)。
currentValue 是callback 数组中正在处理的当前元素。
index可选, 是callback 数组中正在处理的当前元素的索引。
array可选, 是callback map 方法被调用的数组。
另外还有thisArg可选, 执行 callback 函数时使用的this 值。
*/
const arr = [1, 2, 3];
arr.map((num) => num + 1); // [2, 3, 4]

['1', '2', '3'].map(parseInt)

//传递两个参数: 字符串和基数。
//      这里 : 值和下标
['1', '2', '3'].map((item, index) => {
	return parseInt(item, index)
})

//使用map转化得到结果：

['10', '10', '10', '10', '10'].map(Number);//使用编号!
// [10, 10, 10, 10, 10]

Number('1') // = 1