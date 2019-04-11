
//在立即执行函数表达式中定义的变量和方法在外界是访问不到的,只能通过其向外部提供的接口,
//"有限制"地访问.通过函数作用域解决了属性和方法的封装问题.

var Person = (function(){
  var name = "xin";
  var age = 22;
  function getName(){
      return name;
  }
  function getAge(){
      return age;
  }
  return { //返回的是函数，形成闭包
      getName: getName,
      getAge: getAge
  }
})();

console.log(age); // 报错:age未定义
console.log(name); // 报错:name未定义
console.log(Person.age); // undefined
console.log(Person.name); // undefined
//只能通过Person提供的接口访问相应的变量
console.log(Person.getName()); // xin
console.log(Person.getAge()); // 22