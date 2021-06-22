/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
  if(pHead == null) return null
  let slow = pHead, fast = pHead
  while(slow && fast) {
    slow = slow.next
    if (fast.next == null) return null
    fast = fast.next.next
    if (slow === fast) break
  }
  slow = pHead
  while(slow !== fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
module.exports = {
  EntryNodeOfLoop : EntryNodeOfLoop
};
