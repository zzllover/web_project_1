
//JS中没有栈和队列的数据结构只有数组

//但是 数组: pop push

let stack = [];

stack.push(2);
console.log(stack);

stack.push(3);
console.log(stack);

stack.push(4);
console.log(stack);

stack.pop();
console.log(stack);


let queue = [];

queue.unshift(1)//入队操作，unshift方法可向数组的开头添加一个或更多元素，并返回新的长度
                //以此模拟入队操作
console.log(queue);

queue.unshift(2)
console.log(queue);

queue.unshift(3)
console.log(queue);

queue.pop()
console.log(queue);