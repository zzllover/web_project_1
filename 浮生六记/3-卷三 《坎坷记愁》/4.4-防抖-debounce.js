
//防抖----实现代码
//场景是：搜索框关键词匹配
var debounce = function (fn,delayTime) {
  var timeId;
  return function () {
    var context = this, args = arguments;
    timeId && clearTimeout(timeId);
    timeId = setTimeout(() => {
      fn.apply(context, args);
    }, delayTime);
  }
}