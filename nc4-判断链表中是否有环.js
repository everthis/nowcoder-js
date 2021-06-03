/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 
 * @return bool布尔型
 */
function hasCycle( head ) {
  let fast = head, slow = head
  while(fast && slow) {
    slow = slow.next
    if(fast.next == null) return false
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
}
module.exports = {
    hasCycle : hasCycle
};
