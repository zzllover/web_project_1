

let [a, b, c] = [1, 2, 3]
console.log(a)

let [d, [[e], f]] = [4, [[5], 6]]
console.log(e)


let [head, ...tail] = [1, 2, 3, 4]; //tail解构数组占位
console.log(tail) //[ 2, 3, 4 ] 

let [f1, ...f2] = [1]
console.log(f2) // [] f2尝试去解构一个数组，但是元素已经被f1拿走了，因此结构出空数组


//对于解构不成功的情况

let [q1] = []
let [q2,q3] = [1]
// q1,q3 为undefined


//不完全解构
let [x, y] = [1, 2, 3]

// 报错,原因在于，解构必须要有等号右边必须是数组（可遍历的结构）
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;  //要么转为对象以后不具备 Iterator 接口,以上几个式子
let [foo] = {};    //要么本身就不具备 Iterator 接口（最后一个表达式）。

 

//对于 Set 结构，也可以使用数组的解构赋值。因为Set解构具有Iterator接口
let [x, y, z] = new Set(['a', 'b', 'c']);
//x //"a"

//结构默认值

let [s1 = true] = []
//s1 = true

let [x, y = 'b'] = ['a'];
//x = 'a' , y = 'b'

let [x, y = 'b'] = ['a', undefined];
//x = 'a' , y = 'b'//看似这里有值赋给b，但是es6内部判断该位置(===)严格等于undefined时，默认值起效果


let [x = 1] = [undefined];
//x // 1 这里默认值会起效果

let [x = 1] = [null];
//x // null //默认值不起效果，因为 null 并不严格等于undefined    null == undefined //true


//默认值是一个表达式的情况，那么表达式是默认求值的，只有真正用到的时候才去求值，即解构的地方是严格为undefined
function f() {
  console.log('aaa');
}

let [x = f()] = [1];

//等价于

let x;
if ([1][0] === undefined) {
  x = f()
} else {
  x = [1][0]
}

//默认值可以引用解构赋值的其他变量，但是该变量必须已经声明
let [x = 1, y = x] = [] // x=1,y=1
let [x = 1, y = x] = [2] // x=2,y=2
let [x = 1, y = x] = [1, 2] //x=1,y=2
let [x = y, y = 1] = [] // ReferenceError: y is not defined





