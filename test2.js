

//[a, b] = [b, a]

  /*()=> {
  
}*/
/*
public class Solution {

      public int movingCount(int threshold, int rows, int cols)
      {
           boolean bool[][] = new boolean[rows][cols];
          return hashPath(threshold,rows,cols,0,0,bool);
      }
      
      public int hashPath(int threshold, int rows, int cols,int row ,int col ,boolean bool[][]){
          if(row<0 || col<0 || row >= rows || col>=cols || bool[row][col]==true || number(row)+number(col)>threshold) return 0;
          
          bool[row][col]=true;
          return 1+hashPath(threshold,rows, cols,row-1,col,bool)
                  +hashPath(threshold,rows, cols,row,col-1, bool)
                  +hashPath(threshold,rows, cols,row+1,col, bool)
                  +hashPath(threshold, rows, cols,row,col+1,bool);
      }
       public int number(int x){
          int sum=0;
          do{
              sum+=x%10;
          }while((x=x/10)>0);
          return sum;
      }
  }
 */


function coutingNum(m,n,k) {
  let pathBool = new Array();
  for (let i = 0; i < m; i++) {
    pathBool.push(new Array(n).fill(false))
  }
  return isRight(k,m,n,0,0,pathBool);
}
function isRight(k,m,n,row,col,pathBool) {
  if (row < 0 || col < 0 || row >= m || col >= n || pathBool[row][col] == true || number(row) + number(col) > k)
    return 0;
  pathBool[row][col] = true;
  return 1+isRight(k,m, n,row-1,col,pathBool)
                +isRight(k,m, n,row,col-1, pathBool)
                +isRight(k,m, n,row+1,col, pathBool)
                +isRight(k, m, n,row,col+1,pathBool);
}
function number(param) {
  let sum = 0
  do{
    sum += param % 10;   
  }while((param=Math.floor(param/10))>0);
  return sum;
}

//console.log(number(456))


/*
let m = 5, n = 3;
let pathBool = new Array();
for (let i = 0; i < m; i++) {
  //const element = array[i];
  pathBool.push(new Array(n).fill(false))
}

console.log(pathBool)*/

console.log(coutingNum(3,3,6))
