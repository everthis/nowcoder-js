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
