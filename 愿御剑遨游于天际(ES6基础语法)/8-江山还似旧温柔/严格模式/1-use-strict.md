

# 严格模式

"use strict" 的目的是指定代码在严格条件下执行。

严格模式下你不能使用未声明的变量。

```js
"use strict";
x = 3.14;       // 报错 (x 未定义)
```

```js
"use strict";
myFunction();

function myFunction() {
    y = 3.14;   // 报错 (y 未定义)
}
```

//在函数内部声明是局部作用域 (只在函数内使用严格模式):

```js
x = 3.14;       // 不报错 
myFunction();

function myFunction() {
   "use strict";
    y = 3.14;   // 报错 (y 未定义)
}
```

# 使用严格模式的原因

消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;

1. 消除代码运行的一些不安全之处，保证代码运行的安全；
2. 提高编译器效率，增加运行速度；
3. 为未来新版本的Javascript做好铺垫。

```js
"use strict";
x = {p1:10, p2:20};      // 报错 (x 未定义)对象也是一个变量。
```

```js
//不允许删除变量或对象。
"use strict";
var x = 3.14;
delete x;                // 报错
```

```js
//不允许删除函数。
"use strict";
function x(p1, p2) {};
delete x;                // 报错
```

```js
//不允许变量重名:
"use strict";
function x(p1, p1) {};   // 报错
```

```js
//不允许使用八进制
"use strict";
var x = 010;             // 报错
```

```js
//不允许使用转义字符:
"use strict";
var x = \010;            // 报错
```

```js
//不允许对只读属性赋值:
"use strict";
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // 报错，一般模式只是赋值无效
```

```js
//不允许对一个使用getter方法读取的属性进行赋值
"use strict";
var obj = {get x() {return 0} };

obj.x = 3.14;            // 报错
```

```js
//不允许删除一个不允许删除的属性：
"use strict";
delete Object.prototype; // 报错
```

```js
//变量名不能使用 "eval" 字符串:
//变量名不能使用 "arguments" 字符串:
"use strict";
var eval = 3.14;         // 报错
var arguments = 3.14;    // 报错
```

```js
"use strict";
eval ("var x = 2");
alert (x);               // 报错
```

```js
//禁止this关键字指向全局对象。
function f(){
    return !this;
}
// 返回false，因为"this"指向全局对象，"!this"就是false

function f(){
    "use strict";
    return !this;
}
// 返回true，因为严格模式下，this的值为undefined，所以"!this"为true。
```

```js
function f(){ //使用构造函数时，如果忘了加new，this不再指向全局对象，而是报错。
    "use strict";
    this.a = 1;
};
f();// 报错，this未定义
```