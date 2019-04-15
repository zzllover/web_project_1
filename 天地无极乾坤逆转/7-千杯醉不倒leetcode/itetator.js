

function iterate(obj) {
  let res=[];
  for (var key in obj) {
      if(obj.hasOwnProperty(key)){
        res.push(`${key}: ${obj[key]}`);
        //res.push(key + ": " +obj[key]);
      }
  }
  return res;
}

var C = function() {this.foo = 'bar'; this.baz = 'bim';}; 
C.prototype.bop = 'bip'; 
console.log(iterate(new C()));