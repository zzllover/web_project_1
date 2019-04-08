
let res = [];
function solve(json) {
  //{"A":["B","C"],"B":["D","C","F"],"C":["E"],"D":[],"E":["D"],"F":["E","C"]}
  while (JSON.stringify(json) != '{}') {
    let temp;
    for (const key in json) {
      if (json[key].length==0) {
        res.push(key);
        temp = key;
        delete json[key];
        break;
      }
    }
    for (const key in json) {

      if (json[key].length!=0) {
        for (let i = 0; i < json[key].length; i++) {
          if (json[key][i] == temp) {
            json[key].splice(i, 1);
          }
          if (typeof json[key][i] == Object) {
            let t = json[key][i];
            solve(t)
            delete json[key][i]
          }
        }
      }
    }
  }
}

let obj = { "A": ["B", "C"], "B": ["D", "C", "F"], "C": ["E"], "D": [], "E": ["D"], "F": ["E", "C"] }
//delete obj['D']
solve(obj)
console.log(JSON.stringify(res))

//console.log(JSON.parse(""))