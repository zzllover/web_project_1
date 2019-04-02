
let in_ = [197, 130, 1];
let len = in_.length;
function judge(index) {
  if (index == len) {
    return true;
  }
  if (in_[index] >> 1 < 128) {
    return true && judge(index + 1)
  } else if(in_[index]){
    
  }
}

let num = 2;
console.log(num.toString(2))
