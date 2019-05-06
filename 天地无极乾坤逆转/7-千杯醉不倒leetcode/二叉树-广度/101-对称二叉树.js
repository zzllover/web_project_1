//101. 对称二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//二叉树 [1,2,2,3,4,4,3] 是对称的

//思路 是 就将二叉树放入数组，然后判断是否对称

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

//递归写法
var isSymmetric = function (root = new TreeNode()) {
  if (!root) {
    return true;
  }
  return judge(root.left, root.right);
};
function judge(left, right) {
  if (!left && !right) {
    return true;
  }
  if ((!left && right) || (left && !right) || (left.val != right.val)) {
    return false;
  }
  return judge(left.left, right.right) && judge(left.right, right.left);
}

//---------------------构建二叉树-----------------
let root = new TreeNode(1);
let root1 = new TreeNode(2);
let root2 = new TreeNode(2);
let root3 = new TreeNode(3);
let root4 = new TreeNode(4);
let root5 = new TreeNode(4);
let root6 = new TreeNode(3);
root.left = root1;
root.right = root2;
root1.left = root3;
root1.right = root4;
root2.left = root5;
root2.right = root6;
root3.left = null;
root4.left = null;
root5.left = null;
root6.left = null;
//-----------------------------------------------

//迭代
var isSymmetric1 = function (root = new TreeNode()) {
  if (!root) {
    return true;
  }
  let que1 = [];
  let que2 = [];
  que1.unshift(root.left);
  que2.unshift(root.right);
  while (que1.length > 0 && que2.length > 0) {
    let left = que1.pop();
    let right = que2.pop();
    if ((!left && right) || (left && !right)) {
      return false;
    }
    if (left) {
      if ((left.val != right.val)) {
        return false;
      }
      que1.unshift(left.left);
      que1.unshift(left.right);
      que2.unshift(right.right);
      que2.unshift(right.left);
    }
  }
  return true;
};

console.log(isSymmetric1(root));
