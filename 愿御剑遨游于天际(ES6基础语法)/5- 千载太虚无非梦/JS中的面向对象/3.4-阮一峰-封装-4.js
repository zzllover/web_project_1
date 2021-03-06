
//构造函数模式的问题

function Cat(name, color) {
  this.name = name;
  this.color = color;
  this.type = "猫科动物";
  this.eat = function () { alert("吃老鼠"); };
}
//那就是对于每一个实例对象，type属性和eat()方法都是一模一样的内容，
//每一次生成一个实例，都必须为重复的内容，多占用一些内存。这样既不环保，也缺乏效率

var cat1 = new Cat("大毛", "黄色");
var cat2 = new Cat("二毛", "黑色");

console.log(cat1.eat == cat2.eat) //false,各占不同的内存