

//拓展运算符的核心就是打散

//1.将数组打散成为多个参数

//例子，求数组最大元素
Math.max.apply(null, arr);//利用的apply的特性：foo.apply(this,arguments)==this.foo(arg1, arg2, arg3)，
//有了扩展运算符
Math.max(...arr);

//2. 合并多个数组

//例子
//es5写法
let arr1 = [1, 2, 3];
let arr2 = [4, 5]
arr1.concat(arr2);
[...arr1, ...arr2];

//3.复制数组

//es5
const a1 = [1, 2];
const a2 = a1.concat(); // concat会生成新的数组

//es6
const a1 = [1, 2];
// 写法一，利用扩展运算符
const a2 = [...a1];
// 写法二，利用剩余操作符
const [...a2] = a1;

//4、将字符串打散为数组
[...'hello']
// [ "h", "e", "l", "l", "o" ]

//5、打散实现了 Iterator 接口的对象
//实现了 Iterator 接口的对象比如document.querySelectorAll('div')：
let nodeList = document.querySelectorAll('div'); // nodeList对象不是数组，而是一个类似数组的对象
let array = [...nodeList]; // 真正的数组

//6、打散Map和Set结构
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let arr = [...map.keys()]; // [1, 2, 3]

//7、打散迭代器对象

const go = function*(){
  yield 1;
  yield 2;
  yield 3;
};

[...go()] // [1, 2, 3]


//二 剩余操作符的核心就是2个字：打包。
let [a, ...b] = [1,2,3,4,5];
b; // [2,3,4,5]

function ff (...a) {//参数打包
  return a[0] + '-' + a[1] + '-' + a[2];
}

ff(1,3,5); // '1-3-5'

