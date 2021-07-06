/**
 * max increasing subsequence
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function MLS(arr) {
  if(arr == null || arr.length === 0) return 0
  const n = arr.length
  const set = new Set(arr)
  let res = 1
  for(let i = 1; i < n; i++) {
    if(set.has(arr[i] - 1)) continue
    let tmp = arr[i]
    while(set.has(tmp + 1)) {
      tmp++
    }
    res = Math.max(res, tmp - arr[i] + 1)
  }
  return res
}
module.exports = {
  MLS : MLS
};

// another

/**
 * max increasing subsequence
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function MLS(arr) {
  let len = arr.length, max = 0
  let set = new Set(arr)
  for(let i = 0;i < len; i++){
    if(!set.has(arr[i]-1)) {
      let cur = arr[i]
      let count = 1
      while(set.has(cur+1)) {
        count++
        cur++
      }
      max = Math.max(count, max)
    }
  }
  return max;
}
module.exports = {
  MLS : MLS
};
