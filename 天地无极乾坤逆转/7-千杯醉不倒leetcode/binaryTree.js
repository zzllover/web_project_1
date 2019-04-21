

//根据 前序遍历 和 中序遍历 还原二叉树的结构

function NodeT(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var buildTreeByOrdering = function (inOrder="",preOrder="",length) {
  
  if (length == 0) {
    return null;
  }

  let nodeT = new NodeT(preOrder[0]);//创建节点
  let index = 0;
  for (; index < length; index++) {
    if (inOrder[index]==preOrder[0]) {
      break;//找到中序串对应根节点的位置，以此将中序串一分为二
    }
  }

  nodeT.left = buildTreeByOrdering(inOrder.substr(0, index), preOrder.substr(1, index), index);
  nodeT.right = buildTreeByOrdering(inOrder.substr(index + 1), preOrder.substr(index + 1), length - 1 - index);
  return nodeT;
}

let res = buildTreeByOrdering("ADEFGHMZ", "GDAFEMHZ", 8);
// ADEFGHMZ 中序遍历
// GDAFEMHZ 先序遍历
// AEFDHZMG 后序遍历
//console.log(res);
let posterOrderStr = ""
var posterOrder = function (nodeT) {//后序遍历
  if (nodeT == null) {
    return;
  }
  posterOrder(nodeT.left);
  posterOrder(nodeT.right);
  posterOrderStr += nodeT.val;
}
posterOrder(res)
console.log(posterOrderStr);