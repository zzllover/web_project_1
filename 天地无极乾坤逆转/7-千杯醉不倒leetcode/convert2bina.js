
function convertToBinary(num) {
  let res = [];
  while (num) {
    res.unshift((num % 2).toString());
    num = Math.floor(num / 2);
  }
  let len = res.length;
  for (let i = 0; i < 8 - len; i++) {
    res.unshift('0');
  }
  return res.join('')
}

console.log(convertToBinary(100))