/**
 * 
 * 普通函数中的this：
    1.默认情况下（非严格模式），没有找到直接调用者，this指向window

    2.严格模式（'use strict'），没有找到直接调用者，this是undefined

    3.this总是代表它的直接调用者，比如：obj.fun，那么fun中的this是obj

    4.使用call，apply，bind绑定的this指向的是绑定的对象
 */
function func() {
  let self = this;//这里的this符合第四种
  setTimeout(function () {
    console.log(this); //output: Window，符合第一种，普通函数内没有直接调用者，指向window
    console.log(self); //output: {id:11}
    console.log("id:", self.id);//output:111
  }, 500);
}

func.call({ id: 111 });//4.使用call，apply，bind绑定的this指向的是绑定的对象，符合第四种