
const arr = [[1, 2], [3, 4]]
const weakset = new WeakSet(arr)
console.log(weakset)

//=========== weakSet 方法======================
var ws = new WeakSet()
var obj = {}
var foo = {}

ws.add(window)
ws.add(obj)

ws.has(window)	// true
ws.has(foo)	// false

ws.delete(window)	// true
ws.has(window)	// false
//==========上面代码需要在浏览器测试=======