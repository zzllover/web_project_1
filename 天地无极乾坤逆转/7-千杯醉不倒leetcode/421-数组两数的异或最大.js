
var findMaximumXOR = function (nums) {
  let result = 0;
  let mask = 0;
  for (let i = 30; i >= 0; i--) {
    mask = mask | 1 << i;
    //使用样例时，直到i=4,mask前面全为1
    possibleResult = result | 1 << i;//可能的结果，即目前res能够取到这一位
    console.log("possibleResult",possibleResult)
    let tempMaxSet = new Set();
    for (const num of nums) {
      tempMaxSet.add(num & mask);// 且操作，提取出数组元素的前缀 【11111111111111111111110000000】
                                 // 技巧是使用n个1提取出一个数的前n个前缀
      //{0，16}
    }
    console.log("tempMaxSet",tempMaxSet)
    for (const temMax of tempMaxSet) {
      //判断两个前缀可以异或出可能的结果与否
      if (tempMaxSet.has(temMax ^ possibleResult)) {
        //如果 当前前缀temMax 能够 异或 possibleResult 且得到的值还在当前前缀的数组中，说明可以使用
        //当前前缀集合中的元素异或出possibleResult
        //即如果 a = b^c; 那么肯定有  a^b = c
        result = possibleResult;
      }
    }
  }
  return result;
};

findMaximumXOR([3, 10, 5, 25, 2, 8])