
# instanceof

```js
console.log(Object instanceof Object);//true
console.log(Function instanceof Function);//true
console.log(Number instanceof Number);//false
console.log(String instanceof String);//false

console.log(Function instanceof Object);//true

console.log(Foo instanceof Function);//true
console.log(Foo instanceof Foo);//false
```

instanceof的高级用法我把它概括如下:
1.所有  对象和函数 instanceof Object  //true     （因为JS万物皆对象，函数也是对象）
2.所有  函数 instanceof Function  //true      （这个很好理解，包括普通函数和构造函数）
3.除Object和Function之外的构造函数 instanceof 自身  //false
（因为构造函数的**原型链**上**只有**Function.prototype和Object.prototype而没有它们自身的prototype，这一点很不容易理解！）/*关于这一点可以看图解*/

```js
// instanceof代码解释
function instance_of(L, R) {//L 表示左表达式【对象+函数(也是对象)】，R 表示右表达式【右值为构造函数】
 var O = R.prototype;       // 取R的显示原型
 L = L.__proto__;// 取 L 的隐式原型，即原型链上的
 while (true) {
   if (L === null) //
     return false;
   if (O === L)// 这里重点：当 O 严格等于 L 时，返回 true
     return true;
   L = L.__proto__; //顺延着 L的原型链 一直查找
 }
}
```