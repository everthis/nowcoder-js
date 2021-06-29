/**
 * max water
 * @param arr int整型一维数组 the array
 * @return long长整型
 */
function maxWater(arr) {
  let res = 0
  let l = 0, r = arr.length - 1, leftMax = arr[l], rightMax = arr[r]
  while(l < r) {
    if(arr[l] <= arr[r]) {
      l++
      leftMax = Math.max(leftMax, arr[l])
      res += leftMax - arr[l]
    } else {
      r--
      rightMax = Math.max(rightMax, arr[r])
      res += rightMax - arr[r]
    }
  }
  return res
}
module.exports = {
  maxWater : maxWater
};
