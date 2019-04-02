
//1.错误解答，只能解决数字+字符串等基本类型

function deleteDuplicate(arr) {
  return [...new Set(arr)]
}

//console.log(deleteDuplicate([1, 2, 1, 3, 4, "sa", "sa", [2, 1], "as", [1, 2, 3], [2, 1], [1, 2]]))

//2.

function distinct (arr) {
   let hash = {}
   let newArray = []
   for(let i =0; i<arr.length; i++){
       let string = JSON.stringify(arr[i])
       if(!hash[string]){
           hash[string] = 1
           newArray.push(JSON.parse(string))
       }
   }
   return newArray
}
//可以满足初步需求，但是，对于{a:1,b:2}和{b:2,a:1}无法解决
console.log(distinct([1, 2, 1, 3, 4,{a:1,b:2},{b:2,a:1}, "sa", "sa", [2, 1], "as", [1, 2, 3], [2, 1], [1, 2]]))
