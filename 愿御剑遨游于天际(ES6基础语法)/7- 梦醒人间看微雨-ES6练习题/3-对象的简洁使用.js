let name = "彭西明";
let obj1 = {
  "name": name,
  "say": function () {
    console.log("真的服气！")
  }
};
console.log(obj1);
obj1.say();
//es6改写

let obj2 = {
  name,//自己分配键值对
  say() {
    console.log("真滴服气")
  }
};

console.log(obj2);
obj2.say();