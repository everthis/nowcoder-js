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
