
let memo = new Array(1 << 16);

function fib(n) {
  if (n<=1){
    return n;
  }
  if (memo[n]!=undefined) {
    return memo[n];
  }
  return memo[n] = fib(n - 1) + fib(n - 2);
}

console.log(fib(10))