function compute1(arr,des){
  let len = arr.length;
  if(len<2){
    return 0;
  }
  let sum = 0;
  for(let i=0;i<len;i++){
    for(let j=i+1;j<len;j++){
      if((arr[i]+arr[j]) == des){
        sum += i + j
      }
    }
  }
  return sum;
}

let line = "0,1,5,11,17,16,2,5,10,30,12"
let temp = line.split(",")
let nums = [];
//console.log(temp)
let i;
for(i=0;i<temp.length-1;i++){
  nums.push(parseInt(temp[i]))
}
console.log(nums)
//console.log(compute1([0,1,5,11,17,16,2,5,10,30],12))