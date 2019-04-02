
//新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已
class Point {
  constructor(x, y) {
    //constructor方法，这就是构造方法
    //this关键字则代表实例对象
    //ES5 的构造函数Point，对应 ES6 的Point类的构造方法。
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

console.log(typeof class { }) //ouput: function
console.log(Point === Point.prototype.constructor )// true
//类的数据类型就是函数，类本身就指向构造函数。