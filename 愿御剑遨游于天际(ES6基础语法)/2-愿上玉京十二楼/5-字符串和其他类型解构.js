
//字符串被转换成了一个类似数组的对象
const [a, b, c, d, e] = 'hello';
console.log(a, b, c, d, e)
// a // "h"
// b // "e"
// c // "l"
// d // "l"
// e // "o"

//数组的length属性
let {length : len} = 'hello';
//len // 5


//数值和布尔值的解构赋值

//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象

let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true


//函数参数的解构赋值
//函数的参数也可以使用解构赋值。

function add([x, y]){
  return x + y;
}

add([1, 2]); // 3


[[1, 2], [3, 4]].map(([a, b]) => a + b); //[ 3, 7 ]

//函数参数的解构也可以使用默认值。
function move({x = 0, y = 0} = {}) { //move的参数是一个对象,且形参自己有默认值，解析失败，形参使用缺省
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0] //函数有默认参数，不传入就使用默认参数，而默认参数为空，触发undefined从而使用形参的缺省值


//move的参数为一个对象
function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]传入的实参会覆盖函数的默认参数，而由于传入空的均为undefined
move(); // [0, 0] //由于函数有默认参数


[1, undefined, 3].map((x = 'yes') => x); //undefined就会触发函数参数的默认值。
