/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
  * 
  * @param head ListNode类 
  * @param k int整型 
  * @return ListNode类
  */
function reverseKGroup( head ,  k ) {
  if(head == null) return head
  const dummy = new ListNode()
  dummy.next = head
  let n = 0, cur = head
  while(cur) {
    n++
    cur = cur.next
  }
  if(n < k) return head
  let pre = dummy, tail = head

  for(let i = 0; i + k <= n; i += k) {
    for(let j = 1; j < k; j++) {
      const tmp = pre.next
      pre.next = tail.next
      tail.next = tail.next.next
      pre.next.next = tmp
    }
    pre = tail
    tail = tail.next
  } 
  
  return dummy.next
}

module.exports = {
    reverseKGroup : reverseKGroup
};
