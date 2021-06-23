/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
  if(pHead1 == null || pHead2 == null) return null
  let len1 = 0, len2 = 0
  let tmp1 = pHead1, tmp2 = pHead2
  while(tmp1) {
    len1++
    tmp1 = tmp1.next
  }
  while(tmp2) {
    len2++
    tmp2 = tmp2.next
  }
  let delta = len1 - len2
  tmp1 = pHead1
  tmp2 = pHead2
  if (delta > 0) {
    while(delta > 0) {
      tmp1 = tmp1.next
      delta--
    }
  } else if(delta < 0) {
    while(delta < 0) {
      delta++
      tmp2 = tmp2.next
    }
  }
  
  while(tmp1 !== tmp2) {
    tmp1 = tmp1.next
    tmp2 = tmp2.next
  }
  return tmp1
}
module.exports = {
  FindFirstCommonNode : FindFirstCommonNode
};
