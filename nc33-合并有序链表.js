/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
  * 
  * @param l1 ListNode类 
  * @param l2 ListNode类 
  * @return ListNode类
  */
function mergeTwoLists(l1, l2) {
  const dummy = new ListNode()
  let cur = dummy
  while(l1 && l2) {
    if(l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  if(l1) cur.next = l1
  if(l2) cur.next = l2
  
  return dummy.next
}
module.exports = {
    mergeTwoLists : mergeTwoLists
};
