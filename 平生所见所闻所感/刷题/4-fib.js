
/*while (condition) {
  
}*/

let fn = []
fn[0] = 1
fn[1] = 1;
fn[2] = 2;
fn[3] = 3;
function fb(n) {
  if (fn[n] != undefined) {
    return fn[n];
  } else {
    return fb(n - 1) + fb(n - 2);
  }
}
function judge(n) {
  let sum = 0;
  let i = -1;
  while (n > sum) {
    sum += fb(++i);
  }
  //console.log(sum)
  return sum - fb(i);
}

let n = 8;
//console.log(fn);
console.log(judge(n))
