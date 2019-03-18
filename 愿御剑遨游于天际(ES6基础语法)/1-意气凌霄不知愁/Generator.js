function * gen() {
  yield 1;
  yield 2;
  yield 3;
}

gen()

//ES6的新feature， function 后面带  * 的叫做generator function。函数运行时，返回一个迭代器
//浏览器运行返回的是