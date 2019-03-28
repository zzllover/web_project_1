
//升序
//插入排序，假设 a[0] a[1] a[2] a[3] ... a[i-1]已经排序 ，取a[i]依次从a[i-1]往前比较
// 如果a[i] 小于这里的数字，则后挪该数

function insert_sort(arr) {
  for (let i = 1; i < arr.length; i++) {//假设a[0]已经排好了
    //const element = array[i];
    let j,temp = arr[i];//暂存待插入的数
    for (j = i-1; j >= 0 && temp <arr[j]; j--) { 
      arr[j+1] =arr[j]     
    }
    arr[j+1] = temp
  }
  return arr
}

console.log(insert_sort([2,1,3,5,4,6,10,7]))