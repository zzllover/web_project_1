
//实现如下代码：

//Calculator(10).add(4).reduce(3).time(2).divide(2).print();  //  11

let Calculator = function (param) {
  let res = param;
  let obj = {
    add:function (param) {
      res += param;
      return obj
    },
    reduce : function (param) {
      res -= param;
      return obj
    },
    time : function (param) {
      res *= param;
      return obj
    },
    divide : function (param) {
      res /= param;
      return obj
    },
    print : function () {
      console.log(res)
    }
  }
  return obj;
}
Calculator(20).add(4).reduce(3).time(2).divide(2).print(); 