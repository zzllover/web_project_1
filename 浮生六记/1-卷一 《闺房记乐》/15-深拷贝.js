
// let obj = { f1: 1, f2: 3 };
// let { f1, f2 } = obj;

// console.log(f2)
// 工具函数
let _toString = Object.prototype.toString
let map = {
  array: 'Array',
  object: 'Object',
  function: 'Function',
  string: 'String',
  null: 'Null',
  undefined: 'Undefined',
  boolean: 'Boolean',
  number: 'Number'
}
let getType = (item) => {
  return _toString.call(item).slice(8, -1)
}
let isTypeOf = (item, type) => {
  return map[type] && map[type] === getType(item)
}

let DFSdeepClone = (obj, visitedArr = []) => {
  let _obj = {}
  if (isTypeOf(obj, 'array') || isTypeOf(obj, 'object')) {
    let index = visitedArr.indexOf(obj)
    _obj = isTypeOf(obj, 'array') ? [] : {} //每次都需判断进来的是 数组 还是 对象
    if (~index) { // 判断环状数据
      _obj = visitedArr[index]
    } else {
      visitedArr.push(obj)
      for (let item in obj) {
        _obj[item] = DFSdeepClone(obj[item], visitedArr)
      }
    }
  } else if (isTypeOf(obj, 'function')) {
    _obj = eval('(' + obj.toString() + ')');
  } else {
    _obj = obj
  }
  return _obj
}
let aa = [100, 200]
let obj = {
  a: 1,
  d: [aa, 1, 2, [7, 8]],
}
function deepCopy(obj) {
  var result = {};
  for (let prop in obj) {
    if (typeof obj[prop] == "object") {
      var tempResult = deepCopy(obj[prop]);
      result[prop] = tempResult;
    } else {
      result[prop] = obj[prop];
    }
  }
  return result;
}


console.log(obj);
let s1 = deepCopy(obj);
s1['d'][0][1] = 1000;
s1['d'][1] = 1000;
s1['d'][3][1] = 1000;
console.log(obj);


