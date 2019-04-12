
const promise = new Promise(function(resolve, reject) {
  // ... some code
  let s = 1;
  console.log("1")
  setTimeout(() => {
    s = 3;
    console.log("2")
    resolve("nmsl");
  }, 1);
  console.log("3")
    
});
console.log("5")
promise.then(function (value) {
  console.log("6")
  console.log(value);
}, function(error) {
  // failure
  console.log("7")
  });
console.log("8")