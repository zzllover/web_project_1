/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    //从数组最后往前找，找到第i个 它的值大于前面的就停下来，交换 num[i]和nums[i-1],并从i开始排序后面的元素为升序
  let i;
  let len = nums.length;
  let j = 0;
  for (i = len - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      break;
    } 
  }
  if (i==0) {
    sort_from_i(nums, 0);
  } else {
    for (let j = len-1; j >= i; j--) {
      if (nums[j]>nums[i-1]) {
        break;
      }
    }
    [nums[j], nums[i - 1]] = [nums[i - 1], nums[j]];
    sort_from_i(nums, i);
  }
  //console.log(i)
};

function sort_from_i(nums, index) {
  let len = nums.length;
  for (let i = 0; i < len - index - 1; i++) {
    for (let j = index; j < len - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
}

