

console.log(Object.prototype.toString.call("jerry"));//[object String]
console.log(Object.prototype.toString.call(12));//[object Number]
console.log(Object.prototype.toString.call(true));//[object Boolean]
console.log(Object.prototype.toString.call(undefined));//[object Undefined]
console.log(Object.prototype.toString.call(null));//[object Null]
console.log(Object.prototype.toString.call({name: "jerry"}));//[object Object]
console.log(Object.prototype.toString.call(function(){}));//[object Function]
console.log(Object.prototype.toString.call([]));//[object Array]
console.log(Object.prototype.toString.call(new Date));//[object Date]
console.log(Object.prototype.toString.call(/\d/));//[object RegExp]
function Person(){};
console.log(Object.prototype.toString.call(new Person));//[object Object]

//那为什么不直接用obj.toString()呢？

console.log("jerry".toString());//jerry
console.log((1).toString());//1
console.log([1,2].toString());//1,2
console.log(new Date().toString());//Wed Dec 21 2016 20:35:48 GMT+0800 (中国标准时间)
console.log(function(){}.toString());//function (){}
console.log(null.toString());//error
console.log(undefined.toString());//error

/*
同样是检测对象obj调用toString方法（关于toString()方法的用法的可以参考toString的详解），
obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样，这是为什么？
这是因为toString为Object的原型方法，而Array ，function等类型作为Object的实例，都重写
了toString方法。不同的对象类型调用toString方法时，根据原型链的知识，调用的是对应的重写
之后的toString方法（function类型返回内容为函数体的字符串，Array类型返回元素组成的字符串.....）
，而不会去调用Object上原型toString方法（返回对象的具体类型），所以采用obj.toString()不能
得到其对象类型，只能将obj转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用Object
上原型toString方法。
我们可以验证一下，将数组的toString方法删除，看看会是什么结果：
*/

var arr=[1,2,3];
console.log(Array.prototype.hasOwnProperty("toString"));//true
console.log(arr.toString());//1,2,3
delete Array.prototype.toString;//delete操作符可以删除实例属性
console.log(Array.prototype.hasOwnProperty("toString"));//false
console.log(arr.toString());//"[object Array]"

//自定义类型可以采用instanceof区分