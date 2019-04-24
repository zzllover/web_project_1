var input1 = [];
let line;
while(!(line = read_line())){
    //console.log(line);
    input1.push(parseInt(line));
}

let f = [1,1];

function fib(x){
    if(x<=1)return f[x];
    f[x] = fib(x-1)+fib(x-2);
    return f[x]
}
let i;
for(i=0;i<input1.length-1;i++){
    print(fib(input1[i]));
}

printsth(fib(input1[i]));