
//发布-订阅模式又叫做观察者模式,
//定义了对象之间一对多的依赖关系, 
//当一个对象的状态发生改变时, 所有依赖与它的对象都将得到通知.

/*
  发布-订阅模式广泛应用于异步编程之中,
  是一种替代回调函数的方案.多个事件处理函数可以订阅同一个事件,
  当该事件发生后,与其相对应的多个事件处理函数都会运行
*/

/**
 * 取代对象之间硬编码的通知机制,一个对象不用再显示的调用另外一个对象的某个接口,
 * 降低模块之间的耦合程度,虽然不清楚彼此的细节,但是不影响他们之间相互通信
 */

/*
 应用
     DOM事件
       DOM事件是一种典型的发布-订阅模式,
       对一个dom节点的一个事件进行监听,当操作dom节点时,
       触发相应的事件,响应函数执行.事件函数对dom节点完全未知,
       不用去理会是什么事件,如何触发,执行就好.
     自定义事件
       1 指定发布者
       2 "发布-订阅"这种关系用一个对象表示,键表示事件名,值是一个由事件处理程序组成的数组,
          相当于订阅者的花名册
       3 发布消息后,遍历缓存列表,依次执行订阅者的回调函数
*/

/**
 * 发布订阅模式
 */
var EventCenter = (function () {
  var events = {};
  /*
  {
    my_event: [{handler: function(data){xxx}}, {handler: function(data){yyy}}]
  }
  */
  // 绑定事件 添加回调
  function on(evt, handler) {
    events[evt] = events[evt] || [];
    events[evt].push({
      handler: handler
    })
  }
  function fire(evt, arg) {
    if (!events[evt]) {
      return
    }
    for (var i = 0; i < events[evt].length; i++) {
      events[evt][i].handler(arg);
    }
  }
  function off(evt) {
    delete events[evt];
  }
  return {
    on: on,
    fire: fire,
    off: off
  }
}());

var number = 1;
EventCenter.on('click', function (data) {
  console.log('click 事件' + data + number++ + '次');
});
EventCenter.off('click');   //只绑定一次
EventCenter.on('click', function (data) {
  console.log('click 事件' + data + number++ + '次');
});

EventCenter.fire('click', '绑定');