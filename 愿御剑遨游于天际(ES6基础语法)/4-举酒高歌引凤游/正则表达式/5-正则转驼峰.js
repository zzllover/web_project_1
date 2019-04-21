
let str = "hello-world-good-bey";

let res = str.replace(/-(\w)/g,function(){
  return arguments[1].toUpperCase();
});
console.log(res)

/*
    replace方法里的参数，
    第一个是正则表达式，
    第二个是$1,$2,$3,,,,,,,,,等子表达式，
    如果第二个参数传的不是一个字符串，
    而是一个方法，在方法里会有一些默认参数，
    第一个是匹配的字符串，第二个是第一个子表达式匹配的字符串，
    第n个是第n个子表达式匹配的字符串，倒数第二个是匹配的下标，
    最后一个是整个字符串
*/