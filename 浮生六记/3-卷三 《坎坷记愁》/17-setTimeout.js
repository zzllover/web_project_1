

var a = 1;
window.a = 2;

function Test() {
  let a = 3;
  this.a = 4;
  setTimeout(function () {
    console.log(a)
  }, 10)
  setTimeout(function () {
    console.log(this.a)
  }, 10)
  setTimeout(() => {
    console.log(a)
  }, 10)
  setTimeout(() => {
    console.log(this.a)
  }, 10)
}
new Test()


// 例子二
var value = 33;
function Foo() {
  var value = 42;
  setTimeout(function () {
    alert(value);
    alert(this.value)
  }, 500); // 先输出 42 然后输出33  这里的this是第二个this
}
new Foo();

/*
  延迟执行函数中的this的确是指向了window，毫无疑问，上面的所有代码都可以验证哈。
  但是延迟执行函数中的其他变量需要根据上下文来确认。
  */