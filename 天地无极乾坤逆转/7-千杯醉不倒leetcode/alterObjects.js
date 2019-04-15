

function alterObjects(constructor, greeting) {
  // Object.defineProperty(constructor, 'greeting', { //只能改obj，不能改构造函数
  //   get(){
  //     return greeting;
  //   }
  // })
  constructor.prototype.greeting = greeting;
}

var C = function (name) { this.name = name; return this; }; 
var obj1 = new C('Rebecca'); 
//alterObjects(C, 'What\'s up');
Object.defineProperty(C, 'greeting', {
  get(){
    return "1";
  }
})
console.log(obj1['greeting']);