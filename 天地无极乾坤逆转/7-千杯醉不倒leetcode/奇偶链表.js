

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


function ListNode(val) {
     this.val = val;
     this.next = null;
}
var oddEvenList = function(head) {
    //输出
  
  if (head == null) {
    return head;
  } else if (head.next == null) {
    return head;
  }
  let index1 = new ListNode();
  index1.next = head;

  let index2 = new ListNode();
  index2.next = head.next;

  let evenStart = new ListNode();
  evenStart.next = head.next;
  let flag = true;
  while (flag) {
    if (index2.next.next!=null) {
      index1.next.next = index2.next.next;
      index1.next = index2.next.next;
    } else {
      flag = false;
    }
    if (index1.next.next!=null) {
      index2.next.next = index1.next.next;
      index2.next = index1.next.next;
    } else {
      flag = false;
    }
  }
  index1.next.next = evenStart.next;
  index2.next.next = null
  delete index2;
  delete index1;
  return head;
};

let i1 = new ListNode(1);
let i2 = new ListNode(2);
let i3 = new ListNode(3);
let i4 = new ListNode(4);
let i5 = new ListNode(5);
i1.next = i2;
i2.next = i3;
i3.next = i4;
i4.next = i5;
i5.next = null;

oddEvenList(i1);

let index1 = new ListNode();
index1.next = i1;
while (index1.next!=null) {
  console.log(index1.next.val);
  index1.next = index1.next.next;
}


