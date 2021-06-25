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
  * @return int整型
  */
function maxDepth( root ) {
  if(root == null) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
module.exports = {
  maxDepth : maxDepth
};
