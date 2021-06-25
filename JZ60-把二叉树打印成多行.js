/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot){
  const res = []
  if(pRoot == null) return res
  const q = [pRoot]
  while(q.length) {
    const size = q.length
    const cur = []
    for(let i = 0; i < size; i++) {
      const tmp = q.shift()
      cur.push(tmp.val)
      if(tmp.left) q.push(tmp.left)
      if(tmp.right) q.push(tmp.right)
    }
    res.push(cur)
  }

  return res
}
module.exports = {
    Print : Print
};
