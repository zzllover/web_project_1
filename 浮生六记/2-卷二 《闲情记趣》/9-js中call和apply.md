
# call 和 apply

两者都是Function.prototype的方法，使用语法如下：
//*call的使用*//
fun.call(thisArg[, arg1[, arg2[, ...]]])
//*apply的使用*//
fun.apply(thisArg[, argsArray])

thisArg指的是函数fun运行时的**this值**，即指定函数运行时的**执行上下文**。
值得注意的是，当非严格模式下，指定null或者undefined时，会自动指向全局对象
（浏览器中则是window对象），同时值为原始值（数字，字符串，布尔值）的 this
会指向该原始值的自动包装对象。

call（）方法和apply（）方法的作用相同，
他们的区别在于接收参数的方式不同。
对于call（），第一个参数是this值没有变化，变化的是其余参数都直接传递给函数。
（在使用call（）方法时，传递给函数的参数必须逐个列举出来。
使用apply（）时，传递给函数的是参数数组）如下代码做出解释：

function add(c, d){
  return this.a + this.b + c + d;
}
var o = {a:1, b:3};
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16 //参数依次
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34 //数组传参

//两者第一个参数都是要  传入的对象,后面的参数
call(对象，参数1，参数2，...)
apply(对象，[数组])