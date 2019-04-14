
/**
 * 判断给定的数字，进行重新排列后能否是2的幂
 * 
  输入：10
  输出：false
  输入：24
  输出：false
  输入：46
  输出：true
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function (N) {
  let res = [];
  let n = N;
  while (N) {
    res.push((N % 10).toString());
    N = Math.floor(N / 10);
  }
  let s = 1;
  while (s.toString().length < res.length) {
    s *= 2;
  }
  while (s.toString().length == res.length) {
    let str = s.toString();
    let temp = [...res];
    for (let i = 0; i < str.length; i++) {
      let j = temp.indexOf(str[i]);
      if (j == -1) {
        break;
      } else {
        temp.splice(j, 1);
      }
    }
    if (temp.length == 0) {
      return true;
    }
    s *= 2;
  }
  return false
};
//console.log(reorderedPowerOf2(11))
