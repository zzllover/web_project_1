let { f1, f2 } = { f1: "aaaaa", f2: "bbbbb" }
//f1 = 'aaa' ,f2 = 'bbbb'

//对象的解构与数组的结构有一个很重要的不同点
//数组元素按次序结构，变量的取值取决于它的位置；
//而对象的属性没有次序，变量必须与属性同名，才能取到正确的值

let { f3 } = { f1: "aaa", f2: "bbb" } //变量没有对应的同名属性.导致取不到值，最后等于undefined。
//f3 = undefined

let { f3, f4 } = { f3: "ccc", f4: "ddd" } //内部默认使得属性名和变量名一样了
//等价于
let { f3: f3, f4: f4 } = { f3: "ccc", f4: "ddd" } //只是属性名为 f3，变量名为 f4
//对象的解构赋值的内部机制，是先找到同名属性，
//然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

let { f5: nmsl } = { f5: "asdasdas" }
//f5 //ReferenceError: f5 is not defined
//nmsl //'asdasdas'


//嵌套结构的对象。

let obj = {
      p:['hello',{y:'world'}]
};
    
let { p, p: [x1, x2], p: [, { y: x3 }] } = obj
// p = [ 'hello', { y: 'world' } ]
//x1 = 'hello'
//x2 = { y: 'world' }
//x3 = 'world'

//嵌套赋值
let o1 = {}
let a1 = []
  
  ({ f11: o1.p1, f22: a1[0] } = { f11: 111, f22: true }) //必须写成语句的形式 （）

//对象的解构也可以指定默认值

var { x7, y7 = 5 } = { x7: 1 };
//x7 = 1 ,y7 =5

var { x8 = 3 } = { x: null };
//x8 = null

var {x9 = 3} = {x9: undefined};
//x9 = 3

// 解构模式是嵌套的对象，而且子对象所在的父属性不存在 ,报错
let { foo: { bar } } = { baz: 'baz' };

//此错误就等价于
let temp = { face: "beauty" }
temp.foot.right //

/*
let x;
{x} = {x: 1}; */ // x已经声明
// SyntaxError: syntax error


// 正确的写法
let x;
({ x } = { x: 1 }); //上面代码将整个解构赋值语句，放在一个圆括号里面，就可以正确执行。

//解构赋值允许等号左边的模式之中，不放置任何变量名。因此，可以写出非常古怪的赋值表达式。

({} = [true, false]);

({} = 'abc');

({} = []);



//使用结构，分解现有对象库，赋值到某个变量
let { log, sin, cos } = Math;


//数组结构，特殊对象
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
// first // 1
// last // 3

