let str = "  "
/*去除所有空格:*/ let str1 = str.replace(/\s*/g, "");      

/*去除两头空格:*/ let str2 = str.replace(/^\s*|\s*$/g,"");

/*去除左空格：*/  let str3 = str.replace( /^\s*/, "");

/*去除右空格：*/  let str4 = str.replace(/(\s*$)/g, "");

//总结:   匹配空格  \s (即\space)
//       匹配多个空格 \s*（*表示重复前面的\s多个）
//       匹配字符串开头的空格 ^\s (匹配开头的一个)
//       匹配字符串结尾的空格 \s$ (匹配开头的一个)

let h = "nmsl";
let my = h.replace(/l$/, "L");
console.log(my)

//使用 str.trim()也只能去除头尾的空格