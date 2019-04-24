
//632. 最小区间

/*
  你有 k 个升序排列的整数数组。找到一个最小区间，使得 k 个列表中的每个列表至少有一个数包含在其中。
  我们定义如果 b-a < d-c 或者在 b-a == d-c 时 a < c，则区间 [a,b] 比 [c,d] 小。
*/

/*
    输入:[[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
    输出: [20,24]
    解释: 
    列表 1：[4, 10, 15, 24, 26]，24 在区间 [20,24] 中。
    列表 2：[0, 9, 12, 20]，20 在区间 [20,24] 中。
    列表 3：[5, 18, 22, 30]，22 在区间 [20,24] 中。

    // 暴力解法是找出  最小的数 + 最大的数 [min,max]这个区间组成的一定包含所有数
    // 缩小这个区间
    // 问题在于 [min,max]的子集数量极为庞大
    // 怎样划出一个子集出来保证该子集确实满足“每个列表至少有一个数包含在其中”
    // 且是所有满足条件的子集中区间最小的
*/

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  let res = [];
  let numsLen = nums.length;
  for (let i = 0; i < numsLen; i++) {
    let arr = [...new Set(nums[i])];//某一个数组中重复的元素，对于结果似乎影响巨大
    arr.forEach((val) => {
      res.push({
        'val': val,
        'type': i
      })
    })
  }
  res.sort(sortVal); //输入整理
  //console.log(res)
  let collect = [];
  let set = new Set();
  let resl = res.length;
  let j1 = 0;
  for (let i = 0; i <= resl - numsLen; i++) {
    for (let t = i; t < Math.min(i + numsLen + j1, resl); t++){    
      set.add(res[t].type);
    }
    j1 = 0;
    while (set.size != numsLen && (i + numsLen + ++j1) <= resl) {
      set.add(res[i + numsLen + j1 - 1].type);
    }
    if (set.size == numsLen) {
      collect.push([res[i].val, res[i + numsLen + j1 - 1].val]);
    }
    set.clear();
  }
  collect.sort(sortCollect);
  //console.log(collect);
  return collect[0];
};
function sortCollect(a, b) {
  return (a[1] - a[0]) - (b[1] - b[0]);
}
function sortVal(a, b) {// js sort使用技巧
  return a.val - b.val
}
let arr = [[1,2,3],[1,2,3],[1,2,3]]
console.log(smallestRange(arr));
