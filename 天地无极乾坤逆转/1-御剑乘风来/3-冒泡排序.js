
//不解释，最会写的一个算法
//从尾巴往前冒泡就完事了

function bubble_sort(arr) {
  
  for (let i = arr.length-1; i > 0; i--) {
    //const element = arr[i];
    for (let j = 0; j < i; j++) {
      //const element = array[j];
      if (arr[j]>arr[j+1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]       
      }
    }
  }
  return arr
}

function bubble_sort1(arr) {//加速
  
  let lastPos;
  for (let i = arr.length-1; i > 0; i=lastPos) {
    //const element = arr[i];
    lastPos = 0;
    for (let j = 0; j < i; j++) {
      //const element = array[j];
      if (arr[j]>arr[j+1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]     
        lastPos = j //记录最后一次交换的位置，因为j后面一定是排序好了的
      }
    }
  }
  return arr
}

console.log(bubble_sort([2, 1, 3, 5, 4, 6, 10, 7]))
