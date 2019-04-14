
public static void main(String[] args) {
		let n = 100;
		//int[] arr = new int[200];
    let arr = new Array(200);
		let carry;	//进位
		let digit = 1;	//位数
		arr[0] = 1;		//结果先初始化为1
		let temp;		//阶乘的任意元素与临时结果的某位的乘积运算
		
		for (let i = 2; i <= n; i++) {
			carry = 0;
			for (int j = 1; j <= digit; j++) {
				temp = arr[j-1] * i + carry;
				arr[j-1] = temp % 10;
				carry = temp / 10;				
			}
			while(carry != 0) {
				arr[++digit - 1] = carry%10;
				carry /= 10;
			}
		}
		for (int i = digit - 1; i >= 0; i--) {
			System.out.print(arr[i]);
		}
	}
