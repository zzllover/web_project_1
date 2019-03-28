
//（1）let 取代 var
'use strict';

if (true) {
  let x = 'hello';
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//
'use strict';

if (true) {
  console.log(x); // ReferenceError
  let x = 'hello'; //如果用var则不会报错
}

//（2）全局常量和线程安全
//在let和const之间，建议优先使用const，尤其是在全局环境，不应该设置  变量，只应设置  常量。

