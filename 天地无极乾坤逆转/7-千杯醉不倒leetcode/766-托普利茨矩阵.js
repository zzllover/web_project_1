/**
 * @param {number[][]} matrix
 * @return {boolean}
 * 输入: 
 *   matrix = [
      [1,2,3,4],
    [5,1,2,3],
  [9,5,1,2]
  ]
    输出: True
    解释:
    在上述矩阵中, 其对角线为:
    "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]"。
    各条对角线上的所有元素均相同, 因此答案是True。
    [1,2,3,4,5,6]
  [7,1,2,3,4,5]
 * 
 * 
 * 
 * 
 */

//思路是取两对角往中心遍历
// m表示行数
// n表示列数
// start1 = (0,n-1) ==>遍历到(0,1)
// start2 = (m-1,0) ==>遍历到(m-1,n-2)
var isToeplitzMatrix = function(matrix) {
  let res = true;
  let m = matrix.length;//行数
  if (m == 1) {
    return true;
  }
  let n = matrix[0].length;//列数
  //考虑 m n的大小关系
  let start1_m = 0;
  let start1_n = n - 1;
  let start2_m = m-1;
  let start2_n = 0;
  for (let i = 0; i < m - 1; i++) { //行数
    let flag = true;
    for (let j = i; j < n - 1; j++) {
      if (number[i][start1_n - j] - number[i][start1_n - j + 1]){
        flag = false;
        break;
      }
    }
    for (let j = 0; j < array.length; j++) {
      //const element = array[j];
      if (number[i][start1_n - j] != number[i][start1_n - j + 1]) {
        flag = false;
        break;
      }
    }
  }

  return res;
};