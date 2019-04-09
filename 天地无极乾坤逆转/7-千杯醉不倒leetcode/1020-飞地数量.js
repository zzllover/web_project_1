/*

给出一个二维数组 A，每个单元格为 0（代表海）或 1（代表陆地）。

移动是指在陆地上从一个地方走到另一个地方（朝四个方向之一）或离开网格的边界。

返回网格中无法在任意次数的移动中离开网格边界的陆地单元格的数量。

*/

/**
 * @param {number[][]} A
 * @return {number}
 */

let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];
var numEnclaves = function(A) {
  let res = 0;
  //这样遍历，如果这个点可以飞出去，那么先别飞找到上下左右联通的所有点,直接清除为零
  let leni = A.length; //行数
  let lenj = A[0].length;//列数
  for (let j = 0; j < lenj; j++) { //遍历上边界
    if (A[0][j] == 1) {
      dfs(A, 0, j, leni, lenj);
    }
  }
  for (let i = 1; i < leni-1; i++) { //遍历左边界
    if (A[i][0] == 1) {
      dfs(A, i, 0, leni, lenj);
    }
  }
  for (let i = 1; i < leni-1; i++) { //遍历右边界
    if (A[i][lenj-1] == 1) {
      dfs(A, i, lenj - 1, leni, lenj);
    }
  }
  for (let j = 0; j < lenj; j++) { //遍历下边界
    if (A[leni-1][j] == 1) {
      dfs(A, leni - 1, j, leni, lenj);
    }
  }
  //计算剩下的1，还有多少即可
  for (let index = 0; index < leni; index++) {
    A[index].forEach((val) => {
      res += val;
    });
  }
  return res;
};



function dfs(A,i,j,leni,lenj) {
  A[i][j] = 0;
  for (let index = 0; index < 4; index++) {
    let x = i + dx[index];//行
    let y = j + dy[index];//列
    if (x >= 0 && x < leni && y >= 0 && y < lenj && A[x][y]==1) {
      dfs(A, x, y, leni, lenj);
    }  
  }
  return;
}

A = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]]
console.log(numEnclaves(A))
