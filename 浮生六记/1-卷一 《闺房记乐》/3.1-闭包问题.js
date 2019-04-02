/**
 * 
 * 闭包（closure）是Javascript语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。
 * 阮一峰老师的总结
 */

//例子一
/*****************************1************************************************************ */
var name = "The Window";
var object = {
  name: "My Object",
  getNameFunc: function () {
    return function () {
      return this.name;
    };
  }
};

//alert(object.getNameFunc()());
/**
 * 解释原因：执行object.getNameFunc()返回函数：
 * function () {return object.getNameFunc()}，然后执行该函数，由于闭包原则，getNameFunc被保存在内存
 * 然而，此时函数由全局调用，this指向全局，故在全局寻找name
 * 
 */
console.log(object.getNameFunc()()); //output : The Window


//例子二
/****************************2*************************************************** */
var name = "The Window";
var object = {
  name: "My Object",
  getNameFunc: function () {
    var that = this;
    return function () {
      return that.name;
    };
  }
};
/**
 * 解释，首先object.getNameFunc()，getNameFunc()函数内的this指向调用它的对象，这里他暂存this，
 * 即暂存了对象在object，而返回结果为function () {return that.name;};
 * 执行object.getNameFunc()()时，由于闭包原则，getNameFunc()被暂存内存，因此that也在，而that保存的
 * 就是object对象，所以输出"My Object"
 * 
 */
alert(object.getNameFunc()());//output：My Object

//闭包知识，从头说起

/**
 * 
 * 一、变量的作用域
      要理解闭包，首先必须理解Javascript特殊的变量作用域。
      变量的作用域无非就是两种：全局变量和局部变量。
      Javascript语言的特殊之处，就在于  函数内部可以直接读取全局变量  。
      在函数外部自然无法读取函数内的局部变量。
 */

/**
 * 二、如何从外部读取局部变量？
     出于种种原因，我们有时候需要得到函数内的局部变量。
     但是，前面已经说过了，正常情况下，这是办不到的，只有通过变通方法才能实现。
     那就是在函数的内部，再定义一个函数。
 * 
 */

function f1() {
  var n = 999;
  function f2() {
    alert(n); // 999
  }
}
//这就是Javascript语言特有的"链式作用域"结构（chain scope），子对象会一级一级地向上寻找所有父对象的变量。
//所以，父对象的所有变量，对子对象都是可见的，反之则不成立。


//既然f2可以读取f1中的局部变量，那么只要把f2作为返回值，我们不就可以在f1外部读取它的内部变量了吗！
function f1() {
  var n = 999;
  function f2() {
    alert(n);
  }
  return f2;//函数f2就是闭包
}
var result = f1();
result(); // 999

/**
 * 三、闭包的概念
      各种专业文献上的"闭包"（closure）定义非常抽象，很难看懂。
      我的理解是，闭包就是能够读取其他函数内部变量的函数。
      由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，
      因此可以把闭包简单理解成"定义在一个函数内部的函数"。
      所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
 */

/**
 * 四、闭包的用途
       闭包可以用在许多地方。它的最大用处有两个，
       一个是前面提到的可以读取函数内部的变量，
       另一个就是让这些变量的值始终保持在内存中。
 */

function f1() {
  var n = 999;
  nAdd = function () { n += 1 }
  function f2() {
    alert(n);
  }
  return f2;
}
var result = f1();
result(); // 999
nAdd();
result(); // 1000
/**
 * result实际上就是闭包f2函数。它一共运行了两次，第一次的值是999，
 * 第二次的值是1000。这证明了，函数f1中的局部变量n一直保存在内存中，
 * 并没有在f1调用后被自动清除。
 * 
 * 原因就在于f1是f2的父函数，而f2被赋给了一个全局变量，这导致f2始终在内存中，
 * 而f2的存在依赖于f1，因此f1也始终在内存中，不会在调用结束后，
 * 被垃圾回收机制（garbage collection）回收。
 * 
 * 是"nAdd=function(){n+=1}"这一行，首先在nAdd前面没有使用var关键字，因此nAdd是
 * 一个全局变量，而不是局部变量。其次，nAdd的值是一个匿名函数（anonymous function），
 * 而这个匿名函数本身也是一个闭包，所以nAdd相当于是一个setter，可以在函数外部对函数
 * 内部的局部变量进行操作。
 */

 //五、使用闭包的注意点
/*
1）由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，
否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，
将不使用的局部变量全部删除。

2）闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象
（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它
的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。
*/

//总结：闭包是定义在一个函数内部，并且能够读取其他函数内部变量的函数。
//或者：闭包是定义在一个外部函数内部，并且能够访问（存取）外部函数中自由变量的函数。
//闭包是一个抽象的环境记录，它包含狭义的闭包函数以及在创建该函数时，每个自由变量及其
//值或名称绑定存储区直接的一个映射。
