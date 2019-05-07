
//先假设已经建立了二叉搜索树

// 即满足某个元素右子树元素大于该元素

// 递归查找 

function Node(val) {
  this.val = val;
  this.left = thi.right = null;
}


var binarySearch = function (root,x) {
  
  let p = root;
  let res = false;
  while (p && !res) {
    if (p.val === x) {
      res = true
    }else if (p.val > x) {
      p = p.left;
    } else {
      p = p.right;
    }
  }
  if (p) {
    console.log("找到");
  } else {
    console.log("未找到!");
  }
}