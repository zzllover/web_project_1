/**
 * @param {number[]} nums
 * @return {string}
 */
/*
  示例 1:
  输入: [10,2]
  输出: 210

  示例 2:
  输入: [3,30,34,5,9]
  输出: 9534330
*/
// dp[len]
var largestNumber = function (nums) {
  let len = nums.length;
  let visited = new Array(len).fill(false);
  let total = 0;
  let numstr = nums.map((val) => {
    let v = val + "";
    total += v.length;
    return v;
  });
  //回溯法？
  //

  numstr.sort();
  console.log(numstr,total);
};

largestNumber([9,8,9,92,939,9,9984,9995,987])