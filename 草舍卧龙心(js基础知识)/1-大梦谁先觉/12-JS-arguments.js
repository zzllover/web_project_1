
function useArguments() {
  var res = 0;
  for (var key in arguments) {//arguments为对象
    res += arguments[key]
  }
  
  return res;  
}

//console.log(useArguments(1, 2))

/*
  实现函数 callIt，调用之后满足如下条件：
      1、返回的结果为调用 fn 之后的结果
      2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
*/
function callIt(fn) {
  var temp = []
  for(var key in arguments){
      if(typeof arguments[key] != 'function'){
          temp.push(arguments[key]);
      }
  }
  return fn.apply(this,temp);
}



/*
实现函数 partialUsingArguments，调用之后满足如下条件：
  1、返回一个函数 result
  2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
  3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
*/

function partialUsingArguments(fn) {
  var temp = [];
  for(var key in arguments){
      if(typeof arguments[key]!= 'function'){
         temp.push(arguments[key]); 
      }
        
  }
  var result = function(){     
      for(var key in arguments){
          temp.push(arguments[key]);
      }
      return fn.apply(this,temp);    
  }
  return result
}