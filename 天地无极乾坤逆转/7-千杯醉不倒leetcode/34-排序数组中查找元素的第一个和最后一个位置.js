
//排序数组中查找元素的第一个和最后一个位置

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
  let endIndex = -1;
  let count = 0;
  nums.forEach((val, index) => {
    if (val == target) {
      endIndex = index;//如果命中就记录index，所以一定会记录最后一个target 的index
      count++; //同时计数，以便找到开始index
    }
  })
  let res = [-1, -1];
  if (count != 0) {
    res = [endIndex - count + 1 , endIndex];
  } 
  return res;
};