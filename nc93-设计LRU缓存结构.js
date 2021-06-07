/**
 * lru design
 * @param operators int整型二维数组 the ops
 * @param limit int整型 the limit
 * @return int整型一维数组
 */
function LRU(operators, limit) {
  const ops = operators
  const map = new Map()
  const res = []
  for(let i = 0, n = ops.length; i < n; i++) {
    const [op, k, v] = ops[i]
    if(op === 1) {
      if(map.has(k)) map.delete(k)
      map.set(k, v)
      if(map.size > limit) {
        const it = map[Symbol.iterator]()
        const [key, val] = it.next().value
        map.delete(key)
      }
    } else if(op === 2) {
      if(map.has(k)) {
        res.push(map.get(k))
        const val = map.get(k)
        map.delete(k)
        map.set(k, val)
      } else {
        res.push(-1)
      }
    }
  }

  return res
}
module.exports = {
    LRU : LRU
};
