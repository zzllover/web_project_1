function encode(input){
  let res = {};
  if(input.length == 0){
    //console.log(JSON.stringify(res));
    return res;
  }
  let strs = input.split('&');
  //if()
  for (let index = 0; index < strs.length; index++) {
    //const element = array[index];
    let key = strs[index].split('=')[0];
    let val = strs[index].split('=')[1];
    res[key] = val;
    val.replace(/%3A/,':')
    val.replace(/%2F/,'/')
  }
  console.log(JSON.stringify(res));
  return res;
}

//var input = readline();
//var input
// try{
//  console.log(JSON.stringify(encode(JSON.parse(input))))
// }catch(error){
//   console.log(input + ' ' + error.message);
// }
console.log((JSON.parse("a=b&c=d")))
