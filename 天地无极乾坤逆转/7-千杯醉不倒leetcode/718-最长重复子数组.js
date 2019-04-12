/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 * 最长重复子数组
 * 
    输入:
      A: [1,2,3,2,1]
      B: [3,2,1,4,7]
    输出: 3
    解释: 
    长度最长的公共子数组是 [3, 2, 1]。
 */
var findLength = function (A, B) {
  let max = 0;
  let lenA = A.length;
  let lenB = B.length;
  for (let i = 0; i < lenA; i++) {
    let t = B.indexOf(A[i]);
    if (t == -1) {
      continue;
    } else {
      for (let index = t; index < lenB; index++) {
        if (A[i] == B[index]) {
          let temp = 1;
          while ((i + temp) < lenA && (index + temp) < lenB && A[i + temp] == B[index + temp]) temp++;
          max = temp > max ? temp : max;
        }
      }

    }
  }
  return max;
};


console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));