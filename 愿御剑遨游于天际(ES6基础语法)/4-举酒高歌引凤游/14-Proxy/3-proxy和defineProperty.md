
# proxy 和 Object.defineProperty()区别

共性：Object.defineProperty() 和 ES2015 中新增的 Proxy 对象,会经常用来做数据劫持.

## Object。defineProperty()特点：

Object.defineProperty() 的问题主要有三个：

1. 不能监听数组的变化
2. 必须遍历对象的每个属性
3. 必须深层遍历嵌套的对象

数组的这些方法是无法触发set的:push, pop, shift, unshift,splice, sort, reverse.
Vue 把会修改原来数组的方法定义为变异方法 (mutation method)
非变异方法 (non-mutating method):例如 filter, concat, slice 等，它们都不会修改原始数组，而会返回一个新的数组。
Vue 的做法是把这些方法重写来实现数组的劫持。(文中转载部分将在文末标记出原文链接)

```js
const aryMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
const arrayAugmentations = [];
aryMethods.forEach((method)=> {
  // 这里是原生 Array 的原型方法
  let original = Array.prototype[method];
  // 将 push, pop 等封装好的方法定义在对象 arrayAugmentations 的属性上
  // 注意：是实例属性而非原型属性
  arrayAugmentations[method] = function () {
    console.log('我被改变啦!');
    // 调用对应的原生方法并返回结果
    return original.apply(this, arguments);
  };
});
let list = ['a', 'b', 'c'];
// 将我们要监听的数组的原型指针指向上面定义的空数组对象
// 这样就能在调用 push, pop 这些方法时走进我们刚定义的方法，多了一句 console.log
list.__proto__ = arrayAugmentations;
list.push('d');  // 我被改变啦！
// 这个 list2 是个普通的数组，所以调用 push 不会走到我们的方法里面。
let list2 = ['a', 'b', 'c'];
list2.push('d');  // 不输出内容
```

必须遍历每一个属性

```js
Object.keys(obj).forEach(key => {
  Object.defineProperty(obj, key, {
    // ...
  })
})
```

必须深层次遍历嵌套的对象：

这一点可见于vue前几个版本的数据劫持，递归劫持每一个深度的属性

## proxy特点

1. 针对对象:针对整个对象,而不是对象的某个属性
2. 支持数组:不需要对数组的方法进行重载，省去了众多 hack
3. 嵌套支持: get 里面递归调用 Proxy 并返回

Object.defineProperty() 是针对对象的属性进行劫持
而proxy针对对象进行代理

```js
//支持数组
let arr = [1,2,3]
let proxy = new Proxy(arr, {
    get (target, key, receiver) {
        console.log('get', key)
        return Reflect.get(target, key, receiver)
    },
    set (target, key, value, receiver) {
        console.log('set', key, value)
        return Reflect.set(target, key, value, receiver)
    }
})
proxy.push(4)
// 能够打印出很多内容
// get push     (寻找 proxy.push 方法)
// get length   (获取当前的 length)
// set 3 4      (设置 proxy[3] = 4)
// set length 4 (设置 proxy.length = 4)
```

嵌套支持
Proxy 也是不支持嵌套的 Proxy 的写法是在 get 里面递归调用 Proxy 并返回

```js
let obj = {
  info: {
    name: 'eason',
    blogs: ['webpack', 'babel', 'cache']
  }
}
let handler = {
  get (target, key, receiver) {
    console.log('get', key)
    // 递归创建并返回
    if (typeof target[key] === 'object' && target[key] !== null) {
      return new Proxy(target[key], handler)
    }
    return Reflect.get(target, key, receiver)
  },
  set (target, key, value, receiver) {
    console.log('set', key, value)
    return Reflect.set(target, key, value, receiver)
  }
}
let proxy = new Proxy(obj, handler)
// 以下两句都能够进入 set
proxy.info.name = 'Zoe'
proxy.info.blogs.push('proxy')

// get info
// set name Zoe

// get info
// get blogs
// get push
// get length
// set 3 proxy
// set length 4
```