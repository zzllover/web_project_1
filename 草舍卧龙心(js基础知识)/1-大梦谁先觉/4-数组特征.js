
var a = [1, 2, 3]
a.shift();
a.push(1)
a.unshift(2)

var b = a.concat([1, 2])
console.log(b)

//删除数组中第i个元素

//arrayObject.splice(index,howmany,item1,...,itemX)

var arr = a.splice(i - 1, 1)//位置是i-1因为下标从零开始，删除长度为1，返回值是被删除的项目
//而删除操作实际会作用到原来的数组上

//Array对象的使用

shift() //删除数组的第一个元素，并返回该值
unshift(n) //在数组头添加一个元素，并返回新的长度