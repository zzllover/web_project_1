
function Point(x,y) { //构造函数
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () { //对象原型
  return '(' + this.x + ',' + this.y + ')';
  
}

var p = new Point(1,2)

console.log(p.toString())