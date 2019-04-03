//apply的使用案例
/* min/max number in an array */
var numbers = [5, 6, 2, 3, 7];
/* using Math.min/Math.max apply */
var max = Math.max.apply(null, numbers); /* This about equal to Math.max(numbers[0], ...) or Math.max(5, 6, ..) */
var min = Math.min.apply(null, numbers);

console.log(max, min)

//实现一个函数，运算结果可以满足如下预期结果：

/**
 * 
 * 
add(1)(2) // 3
add(1, 2, 3)(10) // 16
add(1)(2)(3)(4)(5) // 15

 */

function add () {
  //将argument转换成数组
  var args = Array.prototype.slice.call(arguments);
  var fn = function () {
      //拼接多次调用的参数为数组
      var arg_fn = Array.prototype.slice.call(arguments);
      //递归调用add
      return add.apply(null, args.concat(arg_fn));
  }
  //最后一次返回fn时，自动调用valueOf
  fn.valueOf = function () {
      return args.reduce(function(a, b) {
          return a + b;
      })
  }
  return fn;
  //直接返回函数名，那么函数会自动调用valueOf进行返回，
  //如果没有valueOf，则会调用toString。某种程度上，弱类型语言的隐式类型转换的锅？
}


