
function valueAtBit(num, bit) {
  //比方说：2.toString(2)  => '10'
  //       2.toString(2).split('')  => ['1','0']
  //       2.toString(2).split('').reverse()  => ['0','1']
  //       2.toString(2).split('').reverse().join('')  => '01'
  return num.toString(2).split('').reverse().join('')[bit-1];
}

console.log(valueAtBit(128, 8))