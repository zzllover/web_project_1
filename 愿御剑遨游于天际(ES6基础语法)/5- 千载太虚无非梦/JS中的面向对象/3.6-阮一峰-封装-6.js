

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.type = "猫科动物"; // 构造函数  都有一个 prototype属性
Cat.prototype.eat = function () { console.log("吃老鼠") };

var cat1 = new Cat("大毛", "黄色");
var cat2 = new Cat("二毛", "黑色");


//isPrototypeOf()
//这个方法用来判断，某个proptotype对象和某个实例之间的关系。
console.log(Cat.prototype.isPrototypeOf(cat1)) //true

//hasOwnProperty()
//每个实例对象都有一个hasOwnProperty()方法，用来判断某一个属性到底是本地属性，
//还是继承自prototype对象的属性。
console.log(cat1.hasOwnProperty("name")); //true
console.log(cat1.hasOwnProperty("type")); //false

//in运算符
//in运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。
console.log("name" in cat1)// true
console.log("type" in cat1)// true