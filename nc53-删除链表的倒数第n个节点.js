/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
  * 
  * @param head ListNode类 
  * @param n int整型 
  * @return ListNode类
  */
function removeNthFromEnd(head, n) {
  if(head == null || n === 0) return head
  const dummy = new ListNode()
  let len = 0, i = 0
  dummy.next = head
  let cur = head
  while(cur) {
    i++
    cur = cur.next
  }
  len = i
  let target = len - n
  cur = dummy
  for(let i = 0; i < target; i++) {
    cur = cur.next
  }
  if (cur.next && cur.next.next) {
    cur.next = cur.next.next
  } else {
    cur.next = null
  }

  return dummy.next
}
module.exports = {
  removeNthFromEnd : removeNthFromEnd
};
