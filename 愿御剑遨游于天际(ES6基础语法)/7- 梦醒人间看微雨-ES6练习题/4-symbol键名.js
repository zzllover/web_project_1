
let name = Symbol('name');
let product = {
  [name]: "电脑",
  "price":66
}

console.log(product)//{ price: 66, [Symbol(name)]: '电脑' }

console.log(Reflect.ownKeys(product));//[ 'price', Symbol(name) ]

console.log(Object.keys(product));    //[ 'price' ]