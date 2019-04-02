//标准的闭包函数
function A() {
  let i = 0;
  return function b() {
    return (++i);
  }
}

let v = A()
//console.log(v()) //1
//console.log(v()) //2
//工作机制，将函数A全部放在内存初始 i为0，v指向内存中A返回的b()，执行A

//箭头函数体的闭包

var Add1 = (i=0) => {return (() => (++i) )};


//因为仅有一个返回，return 及括号（）也可以省略
//箭头函数 (参数)=>(返回值)
var Add2 = (i = 0) => () => (++i);
var v1 = Add2();
console.log(v1());           //1
console.log(v1());           //2