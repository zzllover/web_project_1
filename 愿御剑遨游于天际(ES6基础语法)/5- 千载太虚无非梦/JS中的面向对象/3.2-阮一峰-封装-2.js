
//使用函数

function Cat(name,color) {
  return {
    name: name,
    color: color
  }
}

let cat1 = Cat("猪小四", "黑色");
let cat2 = Cat("猴大", "橘色");

//解决了代码重复，
//但是，cat1和cat2之间没有内在的联系，不能反映出它们是同一个原型对象的实例