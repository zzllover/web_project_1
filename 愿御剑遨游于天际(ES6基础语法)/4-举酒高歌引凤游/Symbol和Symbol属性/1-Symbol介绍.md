
# JS基本类型

原始类型：string(字符串型)，number（数字型），boolean布尔型，null，undefined

+es6新引入的类型，Symbol

# 利用Symbol创建对象的私有成员

以前，访问属性都是通过属性名，无论属性名是由什么元素构成，全部通过一个字符串类型访问所有属性。

私有名称---Symbol技术

为属性添加非字符串名称

# 创建Symbol

```js
let firstName = Symbol()
let person = {}

person[firstName] = "Tom"
console.log(person[firstName])
```

```js
/**
 **************
 */

let firstName = Symbol("first name")//描述
let person = {};

person[firstName] = "Tom"



```