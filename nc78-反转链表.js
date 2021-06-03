/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
  if (pHead ==null) return pHead
  const dummy = new ListNode()
  dummy.next = pHead;
  let n = 0, cur = pHead
  while(cur) {
    n++
    cur = cur.next
  }
  let tmp = null, tail = pHead, p = dummy
  for(let i = 0; i < n - 1; i++) {
    tmp = p.next
    p.next = tail.next
    tail.next = tail.next.next
    p.next.next = tmp
  }
  
  return dummy.next
}
