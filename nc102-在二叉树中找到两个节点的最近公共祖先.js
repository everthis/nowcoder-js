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
 * @param o1 int整型 
 * @param o2 int整型 
 * @return int整型
 */
function lowestCommonAncestor(root, o1, o2) {
  if(root == null) return root
  if(root.val === o1) return o1
  if(root.val === o2) return o2
  const left = lowestCommonAncestor(root.left, o1, o2)
  const right = lowestCommonAncestor(root.right, o1, o2)
  if(left != null && right != null) return root.val
  return left != null ? left : right
}
module.exports = {
  lowestCommonAncestor : lowestCommonAncestor
};
