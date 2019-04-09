/*

在一排多米诺骨牌中，A[i] 和 B[i] 分别代表第 i 个多米诺骨牌的上半部分和下半部分。（一个多米诺是两个从 1 到 6 的数字同列平铺形成的 —— 该平铺的每一半上都有一个数字。）

我们可以旋转第 i 张多米诺，使得 A[i] 和 B[i] 的值交换。

返回能使 A 中所有值或者 B 中所有值都相同的最小旋转次数。

如果无法做到，返回 -1

*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
    
  
  let len = A.length;
  let min = len + 1;
  for (let i = 1; i <7; i++) {//暴力第一轮，找出使得A全一样的旋转次数
    let change = 0;
    let j;
    for (j = 0; j < len; j++) {
      if (A[j] != i && B[j] != i) break;
      else if(A[j]!=i){
        change++;
      }
    }
    if (j==len) { //顺利交换玩一轮
      min = Math.min(min,change)
    }  
  }
  for (let i = 1; i <7; i++) { //暴力第二轮，找出使得B全一样的旋转次数
    let change = 0;
    let j;
    for (j = 0; j < len; j++) {
      if (A[j] != i && B[j] != i) break;
      else if(B[j]!=i){
        change++;
      }
    }
    if (j==len) { //顺利交换玩一轮
      min = Math.min(min,change)
    }  
  }
  if (min == len + 1) {
    return -1;
  }

  return min;
};

console.log(minDominoRotations( [2,1,2,4,2,2],[5,2,6,2,3,2]))