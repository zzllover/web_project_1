
//构造函数模式

//所谓"构造函数"，其实就是一个普通函数，
//但是内部使用了this变量。对构造函数使用new运算符，
//就能生成实例，并且this变量会绑定在实例对象上。

function Cat(name,color) {
  this.name = name;
  this.color = color;
}

let c1 = new Cat("琪琪", "粉红");
let c2 = new Cat("佩佩", "蓝色");

//cat1和cat2会自动含有一个constructor属性，指向它们的构造函数。

console.log(c1.constructor == Cat); //true
console.log(c1 instanceof Cat);//true