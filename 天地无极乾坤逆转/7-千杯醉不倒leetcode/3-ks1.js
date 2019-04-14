
//let line = readline();
let line = '3,11';
let nums = line.split(',').map(Number);

function compute(a, b, count) {
  if (a==b || count == 10) {
    return count;
  }
  let r1 = compute(a + 1, b, count + 1);
  let r2 = compute(a - 1, b, count + 1);
  let r3 = compute(a * 2, b, count + 1);
  return Math.min(r1, r2, r3); 
}

function solve(nums) {
  //console.log(nums)
  let a = nums[0];
  let b = nums[1];
  let r1 = compute(a + 1, b,  1);
  let r2 = compute(a - 1, b,  1);
  let r3 = compute(a * 2, b, 1);

  //console.log(r1, r2,r3);
  return  Math.min(r1, r2,r3);
}

console.log(solve(nums))