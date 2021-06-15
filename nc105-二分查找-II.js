/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 如果目标值存在返回下标，否则返回 -1
 * @param nums int整型一维数组 
 * @param target int整型 
 * @return int整型
 */
function search( nums ,  target ) {
  const n = nums.length
  let l = 0, r = n - 1
  while(l < r) {
    const mid = l + ((r - l) >> 1)
    if(nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid
    }
  } 
  return nums[l] === target ? l : -1
}
module.exports = {
    search : search
};
