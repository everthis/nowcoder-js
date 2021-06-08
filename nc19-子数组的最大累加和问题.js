/**
 * max sum of the subarray
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function maxsumofSubarray( arr ) {
  if(arr == null || arr.length === 0) return 0
  let pre = arr[0]
  let max = pre
  for(let i = 1, n = arr.length; i < n; i++) {
    pre = pre > 0 ? pre + arr[i] : arr[i]
    max = Math.max(max, pre)
  }
  return max
}
module.exports = {
    maxsumofSubarray : maxsumofSubarray
};
