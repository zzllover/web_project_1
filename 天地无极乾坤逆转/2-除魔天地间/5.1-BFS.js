
//迷宫最短路径问题

/**
 * 
 * 
 * 输入迷宫数组，
 * 起点 + 终点
 * 输出到达终点的最短路径。
 * 
 * 
 * 
 * 
 * 
 */

const INF = 1 << 19;
let N = 10, M = 10;

let input = new Array(
  [...'#S######.#'],
  [...'......#..#'],
  [...'.........#'],
  [...'......#..#'],
  [...'......#..#'],
  [...'########.#'],
  [...'......#..#'],
  [...'......#..#'],
  [...'......#..#'],
  [...'......#.G#'])


let d = new Array();
let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
let sx = 0, sy = 1;
let gx = 9, gy = 8;

function bfs() {
  //初始化
  let queue = [];
  for (let i = 0; i < N; i++) {
    //const element = array[i];
    d.push(new Array(M).fill(INF))
  }
  //console.log(d)
  queue.unshift({ x: sx, y: sy });//入栈
  d[sx][sy] = 0;//初始距离为0
  while (queue.length > 0) {
    let obj = queue.pop();
    if (obj.x == gx && obj.y == gy) {
      break;
    }
    for (let i = 0; i < 4; i++) {
      let nx = obj.x + dx[i];
      let ny = obj.y + dy[i];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && input[nx][ny] != '#' && d[nx][ny] == INF) {
        queue.unshift({ x: nx, y: ny });
        d[nx][ny] = d[obj.x][obj.y] + 1;
      }

    }
  }
  return d[gx][gy];
}

console.log(bfs());

//console.log(filed)