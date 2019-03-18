
(function () {
  var a = b =5
})();

console.log(b) //5
console.log(a) //a is not defined


(function () {
    var c = d;
    d = 7 //未使用var，被定义为全局变量
})()