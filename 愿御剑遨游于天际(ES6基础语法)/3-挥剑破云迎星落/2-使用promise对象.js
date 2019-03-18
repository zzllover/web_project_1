
/*var promise1 = new Promise(function (resolve) {
  resolve('B')
})

promise1.then(function (value) {
  console.log(value)
})

console.log('A')*/

//先执行输出A，在执行输出B
//这里明显可以看出，即使是有时候promise内的签订函数，需要同步调用，promise也会让其异步

var promise2 = new Promise(function (resolve) {
  setTimeout(() => {
    resolve();
    resolve();//成功回调被通知了2次
  }, 0);
})

promise2.then(function () { //promise只会调用一次
  console.log('AA')
})

var promise3 = new Promise(function (resolve,reject) {
  // 成功回调先被通知，又通知了失败回调
  setTimeout(function(){
    resolve();
    reject();
  },0)

});
// promise只会调用成功回调
promise3.then(function(){
    console.log('A')
}).catch(function(){
    console.log('B')
});