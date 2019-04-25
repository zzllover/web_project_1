
//实现一个函数 包装一个函数 使得运行结果和函数一致 且运行过的直接返回缓存结果
function memorizeFn(fn) {
  let memo = new Map();
  return function () {
    let args = [].slice.call(arguments);
    let key = args.toString();
    if (!memo.has(key)) {
      let res = fn.apply(null, arguments)
      memo.set(key, res);
      return res 
    } else {
      return memo.get(key);
    }
  }
}

function show() {
  return [].slice.call(arguments).join('');
}

let mm = memorizeFn(show);
console.log(mm(1, 2));
console.log(mm(1, 2));
console.log(mm(1, 2));
console.log(mm(1, 2));