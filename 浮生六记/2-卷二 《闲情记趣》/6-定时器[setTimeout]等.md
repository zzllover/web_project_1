
# 定时器setTimeout的运行机制、事件循环机制eventloop、事件机制

JavaScript引擎是单线程运行的,浏览器无论在什么时候都只且只有一个线程在运行JavaScript程序.由于单线 程关系,这些任务得进行排队,一个接着一个被引擎处理.如果队列非空,引擎就从队列头取出一个任务,直到该任务处理完,即返回后引擎接着运行下一个任务,在任务没返回前队列中的其它任务是没法被执行的.
同步任务都在主线程上执行，形成一个执行栈
主线程之外，还存在一个"任务队列"（taskqueue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。

一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，
于是结束等待状态，进入执行栈，开始执行。

## 事件循环Event Loop

setTimeOut()
与setInterval()
除了执行频次外基本相同，都表示主线程执行完一定时间后立即执行，而setImmediate()与之十分相似，也表示主线程执行完成后立即执行。那么他们之间的区别是什么呢？

```javascript

setTimeout(function(){
    console.log("setTimeout");
},0);

setImmediate(function(){
    console.log("setImmediate");
});

/*两者都代表主线程完成后立即执行，其执行结果是不确定的，
可能是setTimeout回调函数执行结果在前，
也可能是setImmediate回调函数执行结果在前，
但setTimeout回调函数执行结果在前的概率更大些，
这是因为他们采用的观察者不同，
setTimeout采用的是类似IO观察者，
setImmediate采用的是check观察者，
而process.nextTick()采用的是idle观察者*/

//
```

三种观察者的优先级顺序是：idle观察者>>io观察者>check观察者

process.nextTick()，效率最高，消费资源小，但会阻塞CPU的后续调用；
setTimeout()，精确度不高，可能有延迟执行的情况发生，且因为动用了红黑树，所以消耗资源大；
setImmediate()，消耗的资源小，也不会造成阻塞，但效率也是最低的。

```js
console.log("111")
setTimeout(function(){
    console.log("333")
},0)

console.log("222")
//output: 111 222 333
```

回调时，被回调的函数会被放在event loop里，等待线程里的任务执行完后才执行event loop里的代码。
 因此，上述代码会先把线程里的执行完后，再执行event loop里的setTimeout函数.。