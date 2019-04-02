
setTimeout(() => {
  console.log('C')
}, 0);
console.log('D')
new Promise(function (resolve) {
  console.log('E')
  resolve()
  console.log('F')
}).then(function () {
  console.log('G')
});
console.log('H')

//执行顺序：D E F H G C

/**
  不同的任务源会被分配到不同的 Task 队列中，任务源可以分为 微任务
  （microtask） 和 宏任务（macrotask）。在 ES6 规范中，microtask 称为 jobs，
  macrotask 称为 task。
  setTimeout是宏任务，而Promise是微任务，所以按顺序来执行的话，宏任务被放在最后，微任务的then放在次后
 */

