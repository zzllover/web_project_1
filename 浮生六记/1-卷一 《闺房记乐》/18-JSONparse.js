

let a = JSON.parse('{"p": 5}', function(k, v) {
  if (k === '') { return v; } //k为键
  return v * 2;               
});     

console.log(a)
 