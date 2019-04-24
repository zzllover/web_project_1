/**
 * @param {number[]} T
 * @return {number[]}
 */


//，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，
//                你的输出应该是[ 1,   1,  4, 2,  1,  1,  0,  0]。
var dailyTemperatures = function(T) {
    //根据数组的升降值来生成等待天数
  let res = new Array(T.length);
  let len = T.length;
  let i = 0, j = len - 1;
  res[j] = 0;
  let stack = [];//遍历时，用来暂存下降坡 的点
  while (i != len-1) {
    if (stack.length == 0) {
      while ((i + 1) < len && T[i + 1] > T[i]) res[i++] = 1;
    } else {
      while ((i + 1) < len && T[i + 1] > T[i]) {
        //解决栈中暂存的数 
        while (stack.length != 0 && T[stack[stack.length - 1]] < T[i + 1]) {
          res[stack[stack.length - 1]] = i + 1 - stack[stack.length - 1];
          stack.pop();
        }
        res[i++] = 1;
      } 
    }
    while ((i + 1) < len && T[i + 1] <= T[i]) { //将下降列暂存到栈中。
      stack.push(i++);
    }
  }

  for (let i = 0; i < stack.length; i++) {
    res[stack[i]] = 0;
  }
  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))