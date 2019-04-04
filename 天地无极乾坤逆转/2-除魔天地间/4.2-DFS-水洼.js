
let M =13, N = 3;//N行，M列
let filed = new Array(
  [...'W.........WW.'],
  [...'W.........WW.'],
  [...'W.........WW.'],
)
function  dfs(x,y){
  filed[x][y] = '.';
  for (let dx = -1; dx < 2; dx++) {
    //const element = array[index];
    for (let dy = -1; dy < 2; dy++) {
      //const element = array[index];
      let nx = x + dx;
      let ny = y + dy;
      //console.log(filed[0][0])
      if (nx >= 0 && ny >= 0 && nx < N && ny < M && filed[nx][ny] == 'W') {
        dfs(nx, ny);     
      }
    }  
  }
  return;
}

let res = 0;
function solve() {
  console.log(filed)
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (filed[i][j] == 'W') {
        //从有 W 水的地方开始dfs
        dfs(i, j);
        res++;
      }
    } 
  }
  console.log(res);
}

solve()