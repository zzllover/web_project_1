
function PromiseTest1(fn) { //1. promise构造函数接收一个函数为参数

  function resolve(value) { //3. 异步操作执行完了以后，调用resolve
                            //4. 这里就得执行回调了
    console.log(value);
  }
  fn(resolve);//2.这个函数 有两个（resolve reject）参数
}

new PromiseTest1(function (resolve) {
  resolve(777777);
})