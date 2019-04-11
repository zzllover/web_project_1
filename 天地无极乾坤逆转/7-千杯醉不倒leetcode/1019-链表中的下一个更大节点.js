/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head //输入是一个链表
 * @return {number[]} //输出是一个数组
 * 
 *  输入：[1,7,5,1,9,2,5,1]
 *  输出：[7,9,9,9,0,5,0,0]
 */
var nextLargerNodes = function(head) {
    if (head==null) {
      return [];
    } else if (head.next == null) {
      return [0];
  }
  let res = []
  let p = new ListNode();
  p.next = head;
  while (p.next!=null) {
    res.push(p.next.val);
    p.next = p.next.next;
  }
  let len = res.length;
  for (let i = 0; i < len; i++) {
    //const element = array[i];
    let j = i + 1;
    while (j < len && res[j] <= res[i]) {
      j++;
    }
    if (j == len) {
      res[i] = 0;
    } else {
      // for (let t = i; t < j; t++) {
      //   res[t] = res[j]
      // }
      //i = j - 1;//跳步
      res[i] = res[j];
    }
  }

  return res;
};

function ListNode(val) {
   this.val = val;
   this.next = null;
}

let in1 = new ListNode(1);
in1.next = null;

console.log(nextLargerNodes(in1))