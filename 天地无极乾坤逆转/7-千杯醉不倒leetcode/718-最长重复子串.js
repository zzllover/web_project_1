/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let l1 = A.length, l2 = B.length, max = 0;
  for (let offset = -l2 + 1; offset < l1; offset++) {
    let l = 0;
    for (let i = Math.max(0, offset); i < l1 && i - offset < l2; i++) {
      if (A[i] === B[i - offset]) {
        l++;
        max = Math.max(max, l);
      }
      else l = 0;
    }
  }
  return max;
};