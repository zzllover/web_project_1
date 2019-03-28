let uid = Symbol("uuid")

console.log(uid)

let person = {
  [uid]:"jjbang"
}

console.log(person[uid])
//console.log(person[Symbol(uuid)])