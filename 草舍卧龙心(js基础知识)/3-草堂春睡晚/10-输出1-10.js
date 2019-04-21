let count = 0;
let timer = setInterval(() => {
  console.log(++count);
  if (count == 10) clearInterval(timer)
}, 1000)