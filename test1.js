function com(A, B) {
  let s1 = 0;
  let s2 = 0;
  let a1 = [];
  for (let index = 0; index < A.length; index++) {
    s1 += A[index];  
    a1[A[index]] = A[index]
  }
  for (let index = 0; index < B.length; index++) {
    s2 += B[index];    
  }

  let ave = (s1 + s2) / 2
  let cj = 0
  if (s1>s2) {
    cj = s1 - ave
    //console.log(cj)
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];     
    // }
    for (let index = 0; index < B.length; index++) {
      if ((B[index] + cj) in a1) {
        return [B[index] + cj,B[index]]
      }          
    }
  } else {
    cj = s2 - ave
    for (let index = 0; index < B.length; index++) {
      if ((B[index] - cj) in a1) {
        return [B[index] - cj,B[index]]
      }          
    }
  }
  
}

A = [1,2,5]
B = [2,4]

console.log(com(A, B))
