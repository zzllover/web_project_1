
//二、 prototype模式

function Animal() { //"动物"对象的构造函数。【父类】
  this.species = "动物";
}

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype = new Animal();   //将Cat的prototype对象指向一个Animal的实例
//将Cat的prototype对象指向一个Animal的实例。相当于完全删除了prototype 对象原先的值，然后赋予一个新值
//任何一个prototype对象都有一个constructor属性，指向它的构造函数
//加了这一行以后，Cat.prototype.constructor指向Animal。
//这显然会导致继承链的紊乱

Cat.prototype.constructor = Cat;//手动纠正，将Cat.prototype对象的constructor值改为Cat