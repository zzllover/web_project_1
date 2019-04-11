function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype = {
  constructor: Person,
  printName: function () {
    console.log(this.name);
  },
  printAge: function () {
    console.log(this.age);
  }
}

var person = new Person('xin', 22);
person.printName(); // xin
person.printAge(); // 22