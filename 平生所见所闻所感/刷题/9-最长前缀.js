var longestCommonPrefix = function(strs) {
    
  let i=0,j=0,flag = true;
  let len = strs.length;
  if(len==0){
      return "";
  }else if(len == 1){
      return strs[0];
  }
  
  while (flag) {
    //console.log(j)
    let i;
    for (i = 1; i < len; i++){
        //console.log(strs[i-1].substr(j,1) != strs[i].substr(j,1) )
          if(strs[i-1].substr(j,1) != strs[i].substr(j,1))break;
    }
      
    if(i==len) j++;
    else flag = false;
  }
  
  if(j==0) return "";
  else{
      return strs[0].substr(0,j)
  }
};

console.log(longestCommonPrefix( ["",""]))

//console.log("pxm".substr(2,1))

