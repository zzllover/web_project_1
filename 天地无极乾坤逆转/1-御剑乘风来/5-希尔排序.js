
//1959年Shell发明，第一个突破O(n2)的排序算法，是简单插入排序的改进版。
//它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序

//先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述：

/*
  选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
  按增量序列个数k，对序列进行 k 趟排序；
  每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。
  仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。
*/

//希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列。

//分组插入排序

function shell_sort(arr) {

  //希尔排序
  let len = arr.length
  let temp, gap = Math.floor(len / 2);
  while (gap > 0) {
    for (let i = gap; i < len ; i++) {
      //const element = array[i];
      let preIndex = i - gap;
      temp = arr[i]
      while (preIndex >=0 && arr[preIndex] >temp) {
        arr[preIndex + gap] = arr[preIndex]
        preIndex -= gap;
      }
      arr[preIndex + gap] = temp;
    }

    gap = Math.floor(gap / 2); //js要自己取整数，向下取整数
  }
  return arr
}

console.log(shell_sort([2, 1, 3, 5, 4, 6, 10, 7]))