/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot) {
  const obj = { res: true }
  helper(pRoot, obj)
  return obj.res
}

function helper(node, obj) {
  if(node === null) return 0
  const left = helper(node.left, obj)
  const right = helper(node.right, obj)
  if(Math.abs(left - right) > 1) obj.res = false
  return Math.max(left, right) + 1
}
module.exports = {
    IsBalanced_Solution : IsBalanced_Solution
};
