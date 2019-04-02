

function solute() {
  let arr = [10, 6,5, 15, 3,7,13,18]

  if (arr.length == 0) {
    return true;
  }
  return isRight(0, arr);
}

function isRight(index,arr) {
  let len = arr.length;
  if ((2 * index + 1) < len && (2 * index + 2) < len) {
    
    if (arr[index] > arr[2 * index + 1] && arr[index] < arr[2 * index + 2]) {    
      return isRight(2 * index + 1, arr) && isRight(2 * index + 2, arr);   
    } else {
      return false;
    }
  }else if (2 * index + 1 < len) {
    if (arr[index]>arr[2 * index + 1]){
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

console.log(solute())