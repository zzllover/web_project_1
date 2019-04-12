/**
 * @param {number} N
 * @return {string}
 * 
 *  输入：3
    输出："111"
    解释：(-2) ^ 2 + (-2) ^ 1 + (-2) ^ 0 = 3
 */
var baseNeg2 = function(N) {
  let res = [];
  if (N == 0) {
    return "0"
  }
  while (N!=0) {
    let a = Math.abs(N % (-2));
    res.unshift(a);
    N = Math.floor((N - a) / (-2));
  }

  return res.join('');
};

console.log(baseNeg2(10));