function argsAsArray(fn, arr) {
  return fn.apply(this,arr)
}


function fn(greeting, name, punctuation) { // arr貌似会在这里解构的说..
  return greeting + ', ' + name + (punctuation || '!');
}
let arr = ['Hello', 'Ellie', '!']

console.log(argsAsArray(fn,arr))