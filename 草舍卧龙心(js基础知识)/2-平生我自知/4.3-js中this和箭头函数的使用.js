
//ES6中的箭头函数会直接调用的this是继承父级的this。

function func1() {
  /**
   * 箭头函数没有绑定arguments，所以它会取fun的arguments。
   */
  setTimeout(() => {//箭头函数不绑定自己的参数，也就是说 arguments关键字，并不指向自己的参数
    console.log("args:", arguments);//output:
                                //args: [Arguments] { '0': 2, '1': 1, '2': 4, '3': 5, '4': 4 }
  }, 200);
}

func1(2,1,4,5,4)