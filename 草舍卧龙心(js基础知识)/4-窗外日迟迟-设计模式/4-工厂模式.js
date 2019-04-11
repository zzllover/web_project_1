function Person(name, age) {//工厂函数，而不是创建对象的时候自己去new
  //把创建实例交给一个工厂函数
  var person = new Object();//创建对象
  person.name = name;
  person.age = age;
  person.printName = function () {
    console.log(this.name);
  };
  person.printAge = function () {
    console.log(this.age);
  }
  return person;
}

var person = Person('xin', 22);