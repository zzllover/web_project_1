var divide = function(dividend, divisor) {
    
  if (dividend==0 ) {
    return 0;
  }
  let fh = 1;
  if (dividend < 0) {
    dividend = 0 - dividend;
    fh = 0 - fh;  
  } 
  if (divisor < 0) {
    divisor = 0 - divisor;
    fh = 0 - fh;  
  } 
  let res = 0;
  if (dividend<divisor) {
    return 0;
  } else {
    while (dividend >= divisor) {
      let n = divisor, p = 1;
      while (dividend >= (n << 1)) {
        p <<= 1;
        n <<= 1;
      }
      dividend -= n;
      res += p;
    }
    if (fh < 0) {
      res = 0 - res;
    }
    if (res == 2147483648) {
      res--
    }
    return res;
  }
};

console.log(2147483647/2);