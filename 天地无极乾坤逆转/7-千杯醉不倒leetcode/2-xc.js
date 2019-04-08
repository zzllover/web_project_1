

function solve(input) {
  let max = 0;
  let count;
  for (let i = 0; i < input.length-1; i++) {
    count = 1;
    for (let j = i+1; j < input.length; j++) {
      if (judge(input,i,j)) {
        break;
      }
      count++;
    }
    max = max > count ? max : count;   
  }
  return max;
}

function judge(input,i,j) {
  let res = false;
  let sa = input.substring(i, j).split('');
  sa.map((val) => {
    if (input[j]==val) {
      res = true;
    }
  })
  return res;
}

console.log(solve("abcabcab"));