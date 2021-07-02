/**
 * 
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function maxLength( arr ) {
  const hash = {}
  let res = 0
  for(let i = 0, start = 0, len = arr.length; i < len; i++) {
    const cur = arr[i]
    if(hash[cur] != null) {
      // take 'xyyx' as an example.
      start = Math.max(start, hash[cur] + 1)
    }
    res = Math.max(res, i - start + 1)
    hash[cur] = i
  }

  return res
}
module.exports = {
    maxLength : maxLength
};

// another

/**
 * 
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function maxLength( arr ) {
  const map = new Map()
  let res = 0
  for(let e of arr) {
    while(map.has(e)) {
      const it = map[Symbol.iterator]()
      const key = it.next().value[0]
      map.delete(key)
    }
    map.set(e, 1)
    res = Math.max(res, map.size)
  }
  return res
}
module.exports = {
    maxLength : maxLength
};
