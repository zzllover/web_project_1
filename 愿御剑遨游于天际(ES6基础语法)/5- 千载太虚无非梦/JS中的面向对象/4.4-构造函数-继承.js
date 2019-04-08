
//四、 利用空对象作为中介

//直接继承prototype"存在上述的缺点

var F = function () { };
F.prototype = Animal.prototype;
Cat.prototype = new F();//空对象作为中介
Cat.prototype.constructor = Cat; //这时，修改Cat的prototype对象，就不会影响到Animal的prototype对象。

//封装成一个函数，便于使用

function extend(Child, Parent) {

  var F = function () { };

  F.prototype = Parent.prototype;

  Child.prototype = new F();

  Child.prototype.constructor = Child;

  Child.uber = Parent.prototype;
  //子对象设一个uber属性，这个属性直接指向父对象的prototype属性。
  //（uber是一个德语词，意思是"向上"、"上一层"。）这等于在子对象上打开一条通道，
  //可以直接调用父对象的方法。这一行放在这里，只是为了实现继承的完备性，纯属备用性质。
}

//使用的时候，方法如下

extend(Cat, Animal);

var cat1 = new Cat("大毛", "黄色");

alert(cat1.species); // 动物