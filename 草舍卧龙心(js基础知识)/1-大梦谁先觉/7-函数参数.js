
/*var foo = { n: 1 };
(function (foo) {
  console.log(foo.n)
  foo.n = 3;
  var foo = { n: 2 }
  console.log(foo.n)
  
})(foo)
console.log(foo.n)*/

//等价于

var foo = { n: 1 };
  (function (foo) {//形参foo同实参foo一样指向同一片内存空间，这个空间里的n的值为1
    var foo;  //局部变量定义无效
    console.log(foo.n)
    foo.n = 3;
    foo = { n: 2 } //形参自己指向一块
    console.log(foo.n)
})(foo)

console.log(foo.n)//实参依旧指向原来的地方