
//五、 拷贝继承

//纯粹采用"拷贝"方法实现继承。简单说，如果把父对象的所有属性和方法，
//拷贝进子对象，不也能够实现继承吗？这样我们就有了第五种方法。

function Animal() { }
Animal.prototype.species = "动物";//把Animal的所有不变属性，都放到它的prototype对象上。

function extend2(Child, Parent) {
  var p = Parent.prototype;
  var c = Child.prototype;
  for (var i in p) { //拷贝属性
    c[i] = p[i];
  }
  c.uber = p;
}

//使用
extend2(Cat, Animal);
var cat1 = new Cat("大毛", "黄色");
alert(cat1.species); // 动物