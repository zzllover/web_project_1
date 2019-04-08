
//Javascript是一种基于对象（object-based）的语言，你遇到的所有东西几乎都是对象。
//但是，它又不是一种真正的面向对象编程（OOP）语言，因为它的语法中没有class（类）。
//如果我们要把"属性"（property）和"方法"（method），封装成一个对象，甚至要从原型
//对象生成一个实例对象，我们应该怎么做呢？

var Cat = {
  name: '',
  color:''
}

var cat1 = {};
cat1.name = "Toma";
cat1.color = "Yellow"
var cat2 = {};
cat2.name = "Jimy";
cat2.color = "White";

//实例与原型之间,没有任何的联系
