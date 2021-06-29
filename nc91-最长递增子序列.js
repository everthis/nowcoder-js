/**
 * retrun the longest increasing subsequence
 * @param arr int整型一维数组 the array
 * @return int整型一维数组
 */
function LIS(arr) {
  const res  =  [];
  const maxLen  =  [];
  if (arr.length < 1) return res;
  res.push(arr[0]); 
  maxLen.push(1);
  for (let i = 1; i < arr.length; ++i) {
      if (arr[i] > res[res.length - 1]) {
          res.push(arr[i]);
          maxLen.push(res.length);
      } else {
          let pos = binarySearch(res, arr[i])
          res[pos] = arr[i];
          maxLen.push(pos+1);
      }
  }
  for (let i = arr.length-1, j = res.length; j > 0; --i) {
      if (maxLen[i] == j) {
          res[--j] = arr[i];
      }
  }
  return res;
}
function binarySearch(arr, target, compareFn = (a, b) => a - b) {
  let left = 0;  // inclusive
  let right = arr.length;  // exclusive
  while (left < right) {
    const middle = left + ((right - left) >> 1);
    const compareResult = compareFn(target, arr[middle]);
    if (compareResult > 0) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return right
};
module.exports = {
  LIS : LIS
};
