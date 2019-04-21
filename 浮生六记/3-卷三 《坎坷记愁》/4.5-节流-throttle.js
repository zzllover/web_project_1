
//节流

var throttle = (fn, delayTime) => {
  var _start = Date.now();
  return function () {
    var _now = Date.now(), context = this, args = arguments;
    if (_now - _start >= delayTime) {
      fn.apply(context, args);
      _start = Date.now();//执行完就重置
    }
  }
}