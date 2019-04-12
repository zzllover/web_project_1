
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows == 0) {
    return [];
  }else if (numRows == 1) {
    return [[1]];
  }else if (numRows == 2) {
    return [[1], [1, 1]];
  }
  let yh = [[1], [1, 1]];
  for (let index = 2; index <= numRows-1; index++) {
    let arr = [];
    arr[0] = 1;
    arr[index] = 1;
    for (let j = 1; j < index; j++) {
      arr[j] = yh[index - 1][j-1] + yh[index - 1][j];
    }
    yh.push(arr);
    arr = [];
  }
  return yh;
};

console.log(generate(5))