
//OJ网站使用js的标准输入输出
var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.on('line', function(line) {
  var tokens = line.split(' ')
  console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
})