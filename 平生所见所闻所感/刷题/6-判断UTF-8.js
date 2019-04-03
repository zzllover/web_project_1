
let in_ = [197, 130, 1];
let len = in_.length;
function judge(index) {
  if (index == len) {
    return true;
  }
  let bina = in_[index].toString(2);
  //console.log(index)
  //console.log(bina.length)
  if (bina.length<8) {
    return true && judge(index + 1)
  } else if (bina.substr(0, 3) == "110") {
    //console.log(bina.substr(0, 3))
    if ((index+1)>=len) {
      return false;
    } else if(in_[index+1].toString(2).substr(0, 2)!="10"){
      return false;
    } else {
      return true && judge(index + 2);
    }
  } else if (bina.substr(0, 3) == "1110") {
    if ((index + 2) >= len) {
      return false;
    } else if (in_[index + 1].toString(2).substr(0, 2) != "10" || in_[index + 2].toString(2).substr(0, 2) != "10") {
      return false;
    } else {
      return true && judge(index + 3);
    }   
  }else if (bina.substr(0,3) == "11110") {
    if ((index + 3) >= len) {
      return false;
    } else if (in_[index + 1].toString(2).substr(0, 2) != "10" || in_[index + 2].toString(2).substr(0, 2) != "10" || in_[index + 3].toString(2).substr(0, 2) != "10") {
      return false;
    } else {
      return true && judge(index + 4);
    }      
  } else {
    return false;
  }
}

//let num = 254;
console.log(judge(0))
//console.log(num.toString(2))
