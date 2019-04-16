/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, N) {
  let res = [];
  res[0] = 0;
  res[7] = 0;
  let n = N;
  let temp = [];//.push(cells.join(''));
  while (N != 0 && !temp.includes(cells.join(''))) {
    temp.push(cells.join(''));
    for (let i = 1; i < 7; i++) {
      res[i] = (cells[i - 1] + cells[i + 1]) == 1 ? 0 : 1;
    }
    cells = [...res];
    N--
  }
  console.log(temp)
  console.log(cells)
  if (N == 0) {
    return res;
  } else {
    let i = temp.indexOf(cells.join(''));
    let xhj = temp.length - i;//循环节
    let index = (n - temp.length) % (xhj);
    console.log("index",index)
    return temp[i + index].split('').map(Number);
  }
};

let cells = [1, 0, 0, 1, 0, 1, 1, 0];
console.log(cells);
console.log(prisonAfterNDays(cells, 15));

/**


 */