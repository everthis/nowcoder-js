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
function levelOrder( root ) {
  const res = []
  if(root == null) return res
  const q = [root]
  while(q.length) {
    const size = q.length
    const layer = []
    for(let i = 0; i < size; i++) {
      const tmp = q.shift()
      layer.push(tmp.val)
      if(tmp.left) q.push(tmp.left)
      if(tmp.right) q.push(tmp.right)
    }
    res.push(layer)
  }
  
  return res
}
module.exports = {
    levelOrder : levelOrder
};
