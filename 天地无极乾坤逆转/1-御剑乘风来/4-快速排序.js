
//快速排序首先找到一个基准，下面程序以第一个元素作为基准（pivot），然后先从右向左搜索，
//如果发现比pivot小，则和pivot交换，然后从左向右搜索，如果发现比pivot大，则和pivot交换，
//一直到左边大于右边，此时pivot左边的都比它小，而右边的都比它大，此时pivot的位置就是排好序后应该在的位置，
//此时pivot将数组划分为左右两部分，可以递归采用该方法进行。快排的交换使排序成为不稳定的。
/*
function test(arr) {
  arr[0] = 100
}
let arr = [ 1, 2, 3, 4, 5, 6, 7, 10 ]
test(arr);
console.log(arr) //[ 100, 2, 3, 4, 5, 6, 7, 10 ],函数传递为引用*/

/**
 * 
 * @param {*} arr 快速排序
 */
function quick_sort(arr,left,right) {
  var len = arr.length,
  partitionIndex,
  left = typeof left != 'number' ? 0 : left,
  right = typeof right != 'number' ? len - 1 : right;

if (left < right) {
  partitionIndex = partition(arr, left, right);
  quick_sort(arr, left, partitionIndex-1);
  quick_sort(arr, partitionIndex+1, right);
}
return arr;
}

function partition(arr, left ,right) {     // 分区操作
  var pivot = left,                      // 设定基准值（pivot）
      index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[i],arr[index]] = [arr[index],arr[i]]
      index++;
    }       
  }
  [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]] 
  return index-1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quick_sort([ 1,500,200, 2, 3, 4, 5, 6, 7, 10,1,100,4100]))