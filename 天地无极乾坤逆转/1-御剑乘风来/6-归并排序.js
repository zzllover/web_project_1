

//和选择排序一样，归并排序的性能不受输入数据的影响，
//但表现比选择排序好的多，因为始终都是O(n log n）的时间复杂度。

//代价是需要额外的内存空间。
//归并排序是建立在归并操作上的一种有效的排序算法。
//该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。
//归并排序是一种稳定的排序方法。将已有序的子序列合并，
//得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。
//若将两个有序表合并成一个有序表，称为2 - 路归并

function merge_sort(arr) {
  let len = arr.length
  //console.log(len)
  if (len<2) {
    return arr
  }
  let mid = Math.floor(len / 2)
  let left = arr.slice(0, mid) //居然不能用substring
  let right = arr.slice(mid, len)
  return merge(merge_sort(left),merge_sort(right))  
}

function merge(left,right) {
  let res=[];
  let i = 0, j = 0,index = 0;
  let l = left.length, r = right.length;
  while (i < l && j < r) {
    if (left[i]<right[j]) {
      res[index++] = left[i++]
    } else {
      res[index++] = right[j++]
    }    
  }
  while (j<r) {
    res[index++] = right[j++];
  }
  while (i<l) {
    res[index++] = left[i++]
  }
  console.log(res)
  return res
}

console.log(merge_sort([ 1,500,200, 2, 3, 4, 5, 6, 7, 10,1,100,4100]))