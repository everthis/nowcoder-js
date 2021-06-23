/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
  * 
  * @param root TreeNode类 
  * @return int整型二维数组
  */
function zigzagLevelOrder(root) {
  if(root == null) return []
  let dir = 1
  const q = []
  q.push(root)
  const res = []
  while(q.length) {
    const size = q.length
    const tmp = []
    for(let i = 0; i < size; i++) {
      const cur = q.shift()
      if(dir === 1) tmp.push(cur.val)
      else tmp.unshift(cur.val)
      if(cur.left) q.push(cur.left)
      if(cur.right) q.push(cur.right)
    }
    dir = dir === 1 ? -1 : 1
    res.push(tmp)
  }

  return res
}

module.exports = {
  zigzagLevelOrder : zigzagLevelOrder
};
