/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 /*
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
你可以假设数组中无重复元素。
 */
var searchInsert = function(nums, target) {
    //先暴力解法
  let res = nums.indexOf(target) 
  if (res != -1) {
    return res;
  } else {
    if (nums[0] > target) {
      return 0;
    } else if (nums[nums.length - 1] < target) {
      return nums.length;
    } else {
      for (let index = 0; index < nums.length; index++) {
        if (nums[index]>target) {
          res = index;
          break;
        }
      }
      return res;
    }
  }
};