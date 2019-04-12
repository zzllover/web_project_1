



function compute(...numbers) {

  // 暴力法解决问题
  // 4个数 24中排列方式
  // 然后对于每四个数
  // a b c d
  //
  return input4nums(numbers);
}

//console.log(1, 2, 4, 8);
function input4nums(nums) {
  //暴力输出 4个数的全排列
  for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (i != j)
          for (let k = 0; k < 4; k++) {
            if (k != j && k != i)
              for (let s = 0; s < 4; s++)
                if (s != k && s != j && s != i) {
                  //console.log([nums[i], nums[j], nums[k], nums[s]]);
                  let res = combine3op([nums[i], nums[j], nums[k], nums[s]]);
                  if (res !== null) {
                    return res;
                  }
                }
          }
      }
  }
  return null;
}
const op = ['+', '-', '*', '/'];

function combine3op(nums) {//在4个数中间插入 + - * /
  //插入三个地方
  //nums[0] nums[1] nums[2] nums[3]
  // let res1 = `((${nums[0]}${op[i]}${nums[1]})${op[j]}${nums[2]})${op[k]}${nums[3]}`;
  // let res2 = `(${nums[0]}${op[i]}${nums[1]})${op[j]}(${nums[2]}${op[k]}${nums[3]})`;
  // let res3 = `(${nums[0]}${op[i]}(${nums[1]}${op[j]}${nums[2]}))${op[k]}${nums[3]}`;
  // let res4 = `${nums[0]}${op[i]}((${nums[1]}${op[j]}${nums[2]})${op[k]}${nums[3]})`;
  // let res5 = `${nums[0]}${op[i]}(${nums[1]}${op[j]}(${nums[2]}${op[k]}${nums[3]}))`;
  for (let i = 0; i < 4; i++) { //每个位置对应4种操作符
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        let temp1, temp2, temp3;
        //1
        temp1 = outputByOp(nums[0], nums[1], i);
        temp2 = outputByOp(temp1, nums[2], j);
        temp3 = outputByOp(temp2, nums[3], k);
        if (temp3 == 24) {
          return `((${nums[0]}${op[i]}${nums[1]})${op[j]}${nums[2]})${op[k]}${nums[3]}`
        }

        //2
        temp1 = outputByOp(nums[0], nums[1], i);
        temp2 = outputByOp(nums[2], nums[3], k);
        temp3 = outputByOp(temp1, temp2, j);
        if (temp3 == 24) {
          return `(${nums[0]}${op[i]}${nums[1]})${op[j]}(${nums[2]}${op[k]}${nums[3]})`;
        }

        //3
        temp1 = outputByOp(nums[1], nums[2], k);
        temp2 = outputByOp(nums[0], temp1, i);
        temp3 = outputByOp(temp2, nums[3], j);
        if (temp3 == 24) {
          return `(${nums[0]}${op[i]}(${nums[1]}${op[j]}${nums[2]}))${op[k]}${nums[3]}`;
        }

        //4
        temp1 = outputByOp(nums[1], nums[2], k);
        temp2 = outputByOp(temp1, nums[3], j);
        temp3 = outputByOp(nums[0], temp2, i);
        if (temp3 == 24) {
          return `${nums[0]}${op[i]}((${nums[1]}${op[j]}${nums[2]})${op[k]}${nums[3]})`;;
        }

        //5  j k i 
        temp1 = outputByOp(nums[2], nums[3], j);
        temp2 = outputByOp(nums[1], temp1, k);
        temp3 = outputByOp(nums[0], temp2, i);
        if (temp3 == 24) {
          return `${nums[0]}${op[i]}(${nums[1]}${op[j]}(${nums[2]}${op[k]}${nums[3]}))`;
        }
      }
    }
  }
  return null;
}



function outputByOp(num1, num2, op) {
  switch (op) {
    case 0:
      return num1 + num2;
    case 1:
      return num1 - num2;
    case 2:
      return num1 * num2;
    case 3:
      if (Math.abs(num2)<0.0001) {
        return 10000;
      } else {
        return num1 / num2;
      }
  }
}

console.log(compute(1, 3, 7, 3));

