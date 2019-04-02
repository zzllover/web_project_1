var a = {},
b = { key: 'b' },
c = { key: 'c' };

a[b] = 123;
console.log(a)
a[c] = 456; //覆盖键值对

console.log(a)

console.log(a[b]) //键为[object Object]，值为456
console.log(a[a]) //键为[object Object]，(a也是对象)值为456
//最终 a有一个属性，键为[object Object]，值为456