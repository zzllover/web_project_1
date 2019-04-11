
let book = {
  "name": "《如何优雅的装逼》",
  "price": 100000
}

let proxy = new Proxy(book, {
  get:function (target,property) {
    if (property === "name") {
      return "《从不装逼》";
    } else {
      return target[property];
    }
  },

  set: function (target, property, value) {
    if (property === "price") {
      target[property] = "100000"
    }
  }
})

console.log(book)
console.log(proxy)//{ name: '《如何优雅的装逼》', price: 100000 }
console.log(proxy.name)//《从不装逼》