/*function A(){
  var a = 1
  set1 = function(){
    a = a+1;
  }
}
set1()*/


function f1() {
  var n = 999;
  nAdd = function () { n += 1 }
  function f2() {
    console.log(n);
  }
  return f2;
}
var result = f1();
result()
nAdd()