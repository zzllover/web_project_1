
function func() {
  let self = this;//临时变量self用来将外部的this值导入到内部函数中
  setTimeout(function () {
    console.log(this); //output :{ id: 222 }
    console.log(self); //output :{ id: 222 }
    console.log('id:',self.id)//output :id: 222
  }.bind(this), 500);//在内部函数执行.bind(this)，目的与self = this一样，就是外部的this值导入到内部函数
}

func.call({id:222})