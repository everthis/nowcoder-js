/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param lists ListNode类一维数组 
 * @return ListNode类
 */
function mergeKLists(lists) {
  return merge(lists, 0, lists.length - 1)
}

function merge(lists, l, r) {
  if(l === r) return lists[l]
  if(l > r) return null
  const mid = l + ((r - l) >> 1)
  return mergeTwo(merge(lists, l, mid), merge(lists, mid + 1, r))
}

function mergeTwo(node1, node2) {
  let node = new ListNode()
  let tmp = node
  while(node1 && node2) {
    if(node1.val <= node2.val) {
      tmp.next = node1
      node1 = node1.next
    } else {
      tmp.next = node2
      node2 = node2.next
    }
  }
  tmp.next = node1 != null ? node1 : node2
  return node.next
}

module.exports = {
  mergeKLists : mergeKLists
};
