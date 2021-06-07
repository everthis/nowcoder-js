/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * 
 * @param root TreeNode类 the root of binary tree
 * @return int整型二维数组
 */
function threeOrders(root) {
  const preArr = [], inArr = [], postArr = []
  preOrder(root, preArr)
  inOrder(root, inArr)
  postOrder(root, postArr)
  
  return [preArr, inArr, postArr]
}

function preOrder(root, res) {
  if(root == null) return
  res.push(root.val)
  preOrder(root.left, res)
  preOrder(root.right, res)
}

function inOrder(root, res) {
  if(root == null) return
  inOrder(root.left, res)
  res.push(root.val)
  inOrder(root.right, res)
}

function postOrder(root, res) {
  if(root == null) return
  postOrder(root.left, res)
  postOrder(root.right, res)
  res.push(root.val)
}
module.exports = {
    threeOrders : threeOrders
};
