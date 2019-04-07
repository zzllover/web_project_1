
# 原生JS forEach()和map()遍历

共同点：

1. 都是循环遍历数组中的每一项。
2. forEach() 和 map() 里面每一次执行匿名函数都支持3个参数：
    数组中的当前项item,当前项的索引index,原始数组input。
3. 匿名函数中的this都是指Window。
4. 只能遍历数组

不同点：
  forEach()没有返回值。
  map() 有返回值，可以return 出来。