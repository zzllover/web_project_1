const Person = {
  'name': 'little bear',
  'age': 18,
  'sayHello': function () {
    let self = this //缓存this
    console.log(this)
    /*setInterval(function () {
      console.log('我叫' + self.name + '我今年' + self.age + '岁!')
    }, 1000)*/
  }
}
const sayHelloFun = Person.sayHello //仅仅只是将函数赋值给sayHelloFun
sayHelloFun() //全局调用一个普通函数