
let line = "2 1"
//line = readline();
let num = line.split(' ').map(Number);

let n = num[0];
let k = num[1];


function solve() {
  if (n == k) {
    return 2;
  }
  if (k==1) {
    let fm = 1;
    let fz = 1;
    for (let index = 0; index < n; index++) {
      //const element = array[index];
      fm *= (2 * n - index)
      fz *= (index+1);
    }
    return fm/fz
  }



}

//console.log(2 * n, k);

//console.log(solve())
console.log(1);
console.log();
console.log(2);
