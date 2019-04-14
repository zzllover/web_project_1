let n = 100;
let arr = new Array(400);
let carry;	
let digit = 1;	//位数
arr[0] = 1;		//结果先初始化为1
let temp;		//阶乘的任意元素与临时结果的某位的乘积运算

for (let i = 2; i <= n; i++) {
  carry = 0;
  for (let j = 1; j <= digit; j++) {
    temp = arr[j-1] * i + carry;
    arr[j-1] = temp % 10;
    carry = Math.floor(temp / 10);				
  }
  while(carry != 0) {
    arr[++digit - 1] = carry%10;
    carry =  Math.floor(carry/10);
  }
}
for (let i = 0; i < digit; i++) {
  if (arr[i] != 0) {
    console.log(arr[i]);
    break;
  }
}