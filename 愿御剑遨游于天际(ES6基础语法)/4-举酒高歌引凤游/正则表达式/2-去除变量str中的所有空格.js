
let str = " a as"
let res= str.replace(/\s*/g,"") //去除所有空格
console.log(res)


let str1 = " s a ";
let res1 = str1.replace(/^\s|\s$/g, "") //去除首尾空格
console.log(res1)

let str2 = " s ";
let res2 = str2.replace(/^\s*/, "")  //去除首空格
console.log(res2.length)