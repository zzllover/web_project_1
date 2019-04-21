
function rotaet90(arr) {
  //第 i 行变成 第rows - 1 - i列
  let rows = arr.length;
  let cols = arr[0].length;
  let newarr = []
  for (let index = 0; index < cols; index++) {
    newarr.push([]);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      newarr[j][rows - 1 - i] = arr[i][j];
    }
  }
  return newarr;
}

function rotate180(arr = []) {
  //先倒置所有行，再倒置每一行
  let newarr = arr.reverse();
  newarr.forEach((val) => {
    val.reverse();
  })
  return newarr;
}

function matrixT(arr = []) {
  //矩阵转置 a[j][i] = a[i][j];
  let res = [];
  let rows = arr.length;
  let cols = arr[0].length;
  for (let i = 0; i < cols; i++) {
    res.push([]);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      res[j][i] = arr[i][j]; 
    }
  }
  return res;
}


let arr = [
  [1, 2, 3, 2, 3],
  [4, 5, 6, 12, 2],
  [7, 8, 9, 33, 222],
  [7, 8, 9, 222, 1],
  [7, 8, 9, 333, 33],
  [7, 8, 9, 33, 33],
]
//console.log(rotaet90(arr))

//console.log(rotate180(arr))
matrixT
console.log(matrixT(arr))