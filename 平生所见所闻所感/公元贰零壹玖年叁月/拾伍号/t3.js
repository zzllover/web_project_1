
/*var  m = "hello"

for (var index = 0; index < 10; index++) {
  
  var  m = "hello" + index*2+index  //=>等价于 不要var
}

console.log(m)*/

// console.log(+new Array(017))

// document.getElementById  //返回函数 f

// document.getElementById("22") //返回 HTMLElement  ===>Object

// document.getElementsByClassName('') //HTMLCollection [] ===>Array

//   + new Array(017) //对于一个未赋值但是长度为15的数组进行number类型转化，其结果为NaN

//sea.js----CMD
//require.js---AMD

var foo = {n:1}; //下面foo是作为参数传入，但是由于foo是对象，因此传入的是foo的引用
(function(foo){            //形参foo同实参foo一样指向同一片内存空间，这个空间里的n的值为1
    var foo;               //优先级低于形参，无效。
    console.log(foo.n);    //输出1
    foo.n = 3;             //形参与实参foo指向的内存空间里的n的值被改为3
    foo = {n:2};           //形参foo指向了新的内存空间，里面n的值为2.
    console.log(foo.n);    //输出新的内存空间的n的值
})(foo);
console.log(foo.n);        //实参foo的指向还是原来的内存空间，里面的n的值为3.