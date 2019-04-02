let t = "{ node: 'root', next: [ { node: 'second_root' }, { node: 'second_child', next: [{ node: 'second_child_1', next: { node: 'second_child_1_1' } }, { node: 'second_child_2' }] }, { node: 'third_root', next: { node: 'third_child' , next: [{ node: 'third_child_1', next: { node: 'third_child_1_1' } }, { node: 'third_child_2' }] } } ] }"
//console.log(s)
let s = eval('('+t+')')
function compute2(obj,res) {
  //let res = []
  console.log(obj.node)
  if (obj.next != undefined) {
    if (obj.next.length>1) {
      res.push(obj.node)
      for (let index = 0; index < obj.next.length; index++) {
        //const element = array[index];
        compute2(obj.next[index],res)
      }
    } 
    compute2(obj.next,res)

  } else {
    return;
  } 
}

let ress = []
compute2(s, ress)
let re = "[";
let tt;
for (tt= 0; tt < ress.length-1; tt++){
  re += "\"" + ress[tt] + "\","
}
re += "\"" + ress[tt] + "\"]"
console.log(re)