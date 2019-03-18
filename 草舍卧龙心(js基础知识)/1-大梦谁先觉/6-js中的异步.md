
# 异步模式

回调函数，这是异步编程最基本的方法。
事件监听，另一种思路是采用事件驱动模式。任务的执行不取决于代码的顺序，而取决于某个事件是否发生。
发布/订阅，上一节的"事件"，完全可以理解成"信号"。
Promises对象，Promises 对象是CommonJS 工作组提出的一种规范，目的是为异步编程提供统一接口。

# 同步异步详解

JS 中最基础的异步调用方式是 callback，它将回调函数 callback 传给异步 API，由浏览器或 Node 在异步完成后，通知 JS 引擎调用 callback。对于简单的异步操作，用 callback 实现，是够用的。但随着负责交互页面和 Node 出现，callback 方案的弊端开始浮现出来。 Promise 规范孕育而生，并被纳入 ES6 的规范中。后来 ES7 又在 Promise 的基础上将 async 函数纳入标准。此为 JavaScript 异步进化史。

## 同步与异步的关系

由于js仅存在主线程，导致，一旦进入一个任务耗时过长，下面的任务都没法继续下去，用户的直观感受就是
界面卡死。

通常，代码是由上往下依次执行的。
如果有多个任务，就必需排队，前一个任务完成，后一个任务才会执行。
这种执行模式称之为：同步（synchronous）。
新手容易把计算机用语中的同步，和日常用语中的同步弄混淆。如，“把文件同步到云端”中的同步，指的是“使...保持一致”。
而在计算机中，同步指的是任务从上往下依次执行的模式。比如：

```javascript
A();
B()
C()
```

在这段代码中，A、B、C是三个不同的函数，每个函数都是一个不相关的任务。在同步模式，计算机会先执行 A 任务，再执行 B 任务，最后执行 C 任务。在大部分情况，同步模式都没问题。但是如果 B 任务是一个耗时很长的网络请求，而 C 任务恰好是展现新页面，就会导致网页卡顿。

解决方案是：

将 B 任务分成两个部分。一部分立即执行网络请求的任务，另一部分在请求回来后的执行任务。这种一部分立即执行，另一部分在未来执行的模式称为异步。

```js
A();
ajax('url',function B(){

})
C();
```

上面代码的执行顺序为    A C B

JS 引擎并没有直接处理网络请求的任务，它只是调用了浏览器的网络请求接口，由浏览器发送网络请求并监听返回的数据。
JavaScript 异步能力的本质是浏览器或 Node 的多线程能力。

# callback

未来执行的函数通常也叫 callback。
使用 callback 的异步模式，解决了阻塞的问题，但是也带来了一些其他问题。
在最开始，我们的函数是从上往下书写的，也是从上往下执行的，这种“线性”模式，非常符合我们的思维习惯，
但是现在却被 callback 打断了！在上面一段代码中，现在它跳过 B 任务先执行了 C任务！
这种异步“非线性”的代码会比同步“线性”的代码，更难阅读，因此也更容易滋生 BUG。

```js
A();

ajax('url1', function(){
    B();

    ajax('url2', function(){
        C();
    },function(){
        D();
    });
},function(){
    E();
});
```

上面代码 网络请求url1的正确回调为B(),异常处理回调为E()

在 node 中，为了解决的异常回调导致的“非线性”的问题，制定了错误优先的策略。node 中 callback 的第一个参数，专门用于判断是否发生异常

```js
A();

get('url1', function(error){
    if(error){  //错误优先处理
        E();
    }else {
        B();

        get('url2', function(error){
            if(error){
                D();
            }else{
                C();
            }
        });
    }
});
```

# promise

在 JavaScript 的异步进化史中，涌现出一系列解决 callback 弊端的库，
而 Promise 成为了最终的胜者，并成功地被引入了 ES6 中。
它将提供了一个更好的“线性”书写方式，并解决了异步异常只能在当前回调中被捕获的问题。

Promise 就像一个中介，它承诺会将一个可信任的异步结果返回。
首先 Promise 和异步接口签订一个协议，成功时，调用resolve函数通知 Promise，异常时，
调用reject通知 Promise。
另一方面 Promise 和 callback 也签订一个协议，由 Promise
在将来返回可信任的值给then和catch中注册的 callback。

```js
// 创建一个 Promise 实例（异步接口和 Promise 签订协议）
var promise = new Promise(function (resolve,reject) {
  ajax('url',resolve,reject);
});

// 调用实例的 then catch 方法 （成功回调、异常回调与 Promise 签订协议）
promise.then(function(value) {
  // success
}).catch(function (error) {
  // error
})
```

```js
//首先，promise对象与一般对象的创建方式是一样的
var promise = new Promise()
//此时promise对象和异步接口签订协议 resolve 和 reject
function (resolve,reject) { //即与下面的接口签订协议
  ajax('url',resolve,reject);
}
//另一方面 Promise 和 callback 也签订一个协议，
promise.then(function(value){

}).catch(function(error){

})


```

Promise 是个非常不错的中介，它只返回可信的信息给 callback。
它对第三方异步库的结果进行了一些加工，保证了 callback 一定会被异步调用，且只会被调用一次。

# 异步（async）函数

异步（async）函数是 ES7 的一个新的特性，它结合了 Promise，让我们摆脱 callback 的束缚，
直接用类同步的“线性”方式，写异步函数。

声明异步函数，只需在普通函数前添加一个关键字 async 即可，如async function main(){} 。
在异步函数中，可以使用await关键字，表示等待后面表达式的执行结果，一般后面的表达式是
 Promise 实例。

```js
async function main{
    // timer 是在上一个例子中定义的
    var value = await timer(100);
    console.log(value); // done （100ms 后返回 done）
}

main();
```