
function count(str) {
  let sa = s.split('');
  let temp = {}
  for (let index = 0; index < sa.length; index++) {
    //const element = array[index];
    if (temp[sa[index]] == undefined) {
      temp[sa[index]] = 1;
    } else {
      temp[sa[index]] += 1;
    }
  }
  //let tt = temp.sort()
  let c = 0;
  for (let key in temp) {
    //const element = array[index];
    if (temp[key] > c) c = temp[key];//找出最大数字
  }
  let res = {}
  for (let key in temp) {
    //const element = array[index];
    if (temp[key] == c) {
      res[key] = c
    }
  }
  console.log(res)
  return res
}

let s = "sssrhghhhsssasdebxcsdsadw";
//let sa = s.split('');
count(s)