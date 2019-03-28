
//选择排序，从 a[0] a[1] a[2] a[3] ... a[i]
//每次从 i -- n元素选择最小下标放在 a[i]处，下次从 i+1 -- n元素选择最小下标放在 a[i+1]

/**
 * 原始：2 1 3 4 5 6 1 2 7 9
 * 
 * 第一轮：选择最小下标  = 1 ，交换 a[1] 和 a[0]
 *          结果： 1 2 3 4 5 6 1 2 7 9
 * 第二轮：选择最小下标  = 6 ，交换 a[6] 和 a[1]
 *          结果： 1 1 3 4 5 6 2 2 7 9
 * 第三轮：选择最小下标  = 6 ，交换 a[6] 和 a[2]
 *          结果： 1 1 2 4 5 6 3 2 7 9
 */

function select_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //const element = array[i];
    let pos = i;//暂存本次遍历的最小下标
    
    for (let j = i+1; j < arr.length; j++) {
      //const element = array[index];
      if (arr[j]<arr[pos]) {
        pos = j
      }
    }
    //let temp;
    /*if (pos!=i) { temp = arr[pos]; arr[pos] = arr[i];arr[i] = temp }*/
    [arr[pos],arr[i]] = [arr[i],arr[pos]] //交换两个数
  }
  return arr
}

console.log(select_sort([2,1,3,5,4,6,10,7]))