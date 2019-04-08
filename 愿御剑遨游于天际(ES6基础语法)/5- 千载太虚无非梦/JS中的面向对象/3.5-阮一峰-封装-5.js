
// Javascript规定，每一个  构造函数  都有一个 prototype属性 ，
// 指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承。

// 这意味着，我们可以把那些不变的属性和方法，直接定义在 prototype 对象上。


function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.type = "猫科动物"; // 构造函数  都有一个 prototype属性
Cat.prototype.eat = function () { console.log("吃老鼠") };

var cat1 = new Cat("大毛", "黄色");
var cat2 = new Cat("二毛", "黑色");
console.log(cat1.type); // 猫科动物
cat1.eat(); // 吃老鼠

console.log(cat1.eat == cat2.eat)// 指向同一个地址