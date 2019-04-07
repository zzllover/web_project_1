/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var reverseKGroup = function(head, k) {
  if (k == 1) return head; //长度为1，则直接返回
  if (head == null) return null;//为空就是空
  let st = new ListNode();
  st.next = head;
  let n = 0;
  while (st.next != null) {//遍历整个单链表长度
    n++;
    st.next = st.next.next; 
  }
  if (k > n) return head;
  let index = new ListNode();
  index.next = head;
  let s = k;
  while (s--) { //找到从头到第 k+1个点，即它前面的都要逆转
    index.next = index.next.next;
  }
  let tail = index.next;
  let p = new ListNode();
  p.next = head;
  let start = new ListNode();
  start.next = head;
  let flag = new ListNode();
  let f = true;
  while (p.next != tail) { //逆转前k个节点
    start.next = p.next.next;
    p.next.next = index.next;
    if (f) { //只保存第k个，因为他后面的所有节点，需要加入递归之中
      flag.next = p.next;
      f = false;
    }
    index.next = p.next;
    p.next = start.next;
  }
  flag.next.next = reverseKGroup(tail, k);

  return index.next;
};

let head = new ListNode(1);
let node1 = new ListNode(2);
let node2 = new ListNode(3);
let node3 = new ListNode(4);
let node4 = new ListNode(5);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null

let res = reverseKGroup(head, 2);
let st = new ListNode()
st.next = res;
 while (st.next != null) {
   console.log(st.next.val)
   st.next = st.next.next
 }

