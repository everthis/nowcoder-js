/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 the head node
 * @return ListNode类
 */
function sortInList(head) {
  if(head == null) return head
  const dummy = new ListNode()
  dummy.next = head
  let n = 0
  while(head) {
    n++
    head = head.next
  }
  for(let step = 1; step < n; step <<= 1) {
    let prev = dummy, cur = dummy.next
    while(cur) {
      let left  = cur
      let right = split(left, step)
      cur = split(right, step)
      prev = merge(left, right, prev)
    }
  }
  return dummy.next
}

function split(head, step) {
  if(head == null) return head
  let cur = head
  for(let i = 1; cur.next && i < step; i++) {
    cur = cur.next
  }
  let res = cur.next
  cur.next = null
  return res
}
function merge(left, right, prev) {
  let cur = prev
  while(left && right) {
    if(left.val < right.val) {
      cur.next = left
      left = left.next
    } else {
      cur.next = right
      right = right.next
    }
    cur = cur.next
  }

  if(left) cur.next = left
  else if(right) cur.next = right
  while(cur.next) cur = cur.next

  return cur
}
module.exports = {
  sortInList: sortInList
};
