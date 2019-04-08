
//三 直接继承prototype

function Animal() { //"动物"对象的构造函数。【父类】
  //this.species = "动物";
}
Animal.prototype.species = "动物";//不变的属性都可以直接写入Animal.prototype

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype = Animal.prototype;//直接继承Animal.prototype。
//与前一种方法相比，这样做的优点是效率比较高（不用执行和建立Animal的实例了），
//比较省内存。缺点是 Cat.prototype和Animal.prototype现在指向了同一个对象，
//那么任何对Cat.prototype的修改，都会反映到Animal.prototype。

Cat.prototype.constructor = Cat;//这一句实际上把 Animal.prototype 对象的constructor属性也改掉了！