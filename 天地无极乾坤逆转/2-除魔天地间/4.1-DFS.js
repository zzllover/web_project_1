
//例题一，从给定的整数中，能否找出若干数，使得和为K

//给定数组 a = [1,2,4,7] k =13

let a = [1, 2, 4, 7];
let n = 4, k = 13;

function dfs(i,sum) {
  if (i==n) {return sum == k;}// i已经到达最后一个元素
  if (dfs(i+1,sum)) {return true;}
  if (dfs(i+1,sum+a[i])) {return true;}
  return false;
}


function solve() {
  if (dfs(0,0)) {
    console.log(true)
  } else {
    console.log(false)
  }
}

solve()