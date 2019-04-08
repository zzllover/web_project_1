

//对象之间的"继承"的五种方法。

function Animal() { //"动物"对象的构造函数。【父类】
  this.species = "动物";
}

//一、 构造函数绑定
//使用call或apply方法，
//将  父对象的构造函数 绑定在  子对象上，即在 子对象构造函数 中加一行

function Cat(name, color) {
  Animal.apply(this, arguments);
  this.name = name;
  this.color = color;
}
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species); // 动物