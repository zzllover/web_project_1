function removeWithoutCopy(arr, item) {
  for(var i=0;i<arr.length;i++){
      if(arr[i] == item){
        arr.splice(i, 1);
        i--;
      }
  }
  return arr;
}



function insert(arr, item, index) {
  var newA = [].concat(arr);
  newA.splice(index,0,item);
  return newA
}

function duplicates(arr) {
  var temp = {};
  //for(var i =0 ;i<arr)
  arr.forEach(function(val){
      if(temp[val]==undefined){
          temp[val] =0
      }else{
          temp[val]++;
      }
  })
  var res = []
  for(var key in temp){    // key in obj 
      if(temp[key]!=0){
          res.push(parseInt(key))
      }
  }
  return res;
}

//console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]))


const myArr = [1, 2, 3]

//判断 n是否在数组中
let nn = 4
//console.log(myArr.indexOf(nn));

function fizzBuzz(num) {
  if(num == null || num == undefined || typeof num != 'number'){
      return false;
  }
  var c3 = num % 3;
  var c5 = num%5;
  if(c3 == 0 && c5 ==0){
      return "fizzbuzz"
  }else if(c3 == 0){
      return "fizz"
  }else if(c5==0){
      return "buzz"
  }else{
      return num;
  }  
}
