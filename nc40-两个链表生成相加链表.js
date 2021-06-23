/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head1 ListNode类 
 * @param head2 ListNode类 
 * @return ListNode类
 */
function addInList(head1, head2) {
  const r1 = reverse(head1), r2 = reverse(head2)
  let l1 = r1, l2 = r2, inc = 0
  let dummy = new ListNode()
  let pre = dummy
  while(l1 || l2) {
    let val = inc
    if(l1) {
      val += l1.val
      l1 = l1.next
    }
    if(l2) {
      val += l2.val
      l2 = l2.next
    }
    if(val > 9) inc = 1
    else inc = 0
    const cur = new ListNode(val % 10)
    pre.next = cur
    pre = cur
  }
  if (inc) {
    pre.next = new ListNode(1)
  }
  return reverse(dummy.next)
}

function reverse(head) {
  const dummy = new ListNode()
  dummy.next = head
  let len = 0, cur = head
  while(cur) {
    len++
    cur = cur.next
  }
  let p = dummy, tail = head, tmp = null
  for(let i = 0; i < len - 1; i++) {
    tmp = p.next
    p.next = tail.next
    tail.next = tail.next.next
    p.next.next = tmp
  }
  return dummy.next
}

module.exports = {
  addInList : addInList
};

// another

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head1 ListNode类 
 * @param head2 ListNode类 
 * @return ListNode类
 */
function addInList(head1, head2) {
  const stack1 = [], stack2 = []
  let tmp1 = head1, tmp2 = head2
  while(tmp1) {
    stack1.push(tmp1)
    tmp1 = tmp1.next
  }
  while(tmp2) {
    stack2.push(tmp2)
    tmp2 = tmp2.next
  }

  let inc = 0
  let pre = null
  while(stack1.length || stack2.length) {
    const val1 = stack1.length > 0 ? stack1.pop().val : 0
    const val2 = stack2.length > 0 ? stack2.pop().val : 0
    const sum = val1 + val2 + inc

    if(sum > 9) inc = 1
    else inc = 0
    const val = sum % 10
    const node = new ListNode(val)
    node.next = pre
    pre = node
  }

  if(inc) {
    const node = new ListNode(1)
    node.next = pre
    return node
  } else {
    return pre
  }
}

module.exports = {
  addInList : addInList
};
