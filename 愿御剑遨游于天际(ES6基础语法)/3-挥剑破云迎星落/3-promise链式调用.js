
var fetch = function(url){
  // 返回一个新的 Promise 实例
  return new Promise(function (resolve,reject) {
      ajax(url,resolve,reject);
  });
}

A();
fetch('url1').then(function(){
  B();
  // 返回一个新的 Promise 实例
  return fetch('url2');
}).catch(function(){
  // 异常的时候也可以返回一个新的 Promise 实例
  return fetch('url2');

}).then(function() { // 使用链式写法调用这个新的 Promise 实例的 then 方法    
  C();
  // 继续返回一个新的 Promise 实例...
})
// A B C ...

/*
如此反复，不断返回一个 Promise 对象，再采用链式调用的方式不断地调用。
使 Promise 摆脱了 callback 层层嵌套的问题和异步代码“非线性”执行的问题。

Promise 解决的另外一个难点是 callback 只能捕获当前错误异常。
Promise 和 callback 不同，每个 callback 只能知道自己的报错情况，
但 Promise 代理着所有的 callback，所有 callback 的报错，都可以由 Promise 统一处理。
所以，可以通过catch来捕获之前未捕获的异常。

Promise 解决了 callback 的异步调用问题，但 Promise 并没有摆脱 callback，
它只是将 callback 放到一个可以信任的中间机构，这个中间机构去链接我们的代码和异步接口

*/