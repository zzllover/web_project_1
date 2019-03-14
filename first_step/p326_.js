

//3的幂

//给定一个整数，判断该数是否是3的整数幂

// input 27
// output true

var isPowerOfThree = function (n) {
  
  if (n == 0) {
    return false
  }

  while (n%3==0) {
    n /= 3;
  }
  if (n ==1) {
    return true
  } else {
    return false
  }
}