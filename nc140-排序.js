/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 将给定数组排序
 * @param arr int整型一维数组 待排序的数组
 * @return int整型一维数组
 */
function MySort(arr) {
  mergeSort(arr, 0, arr.length - 1)
  return arr
}

function mergeSort(arr, start, end) {
  if(start < end) {
    const mid = start + ((end - start) >> 1)
    mergeSort(arr, start, mid)
    mergeSort(arr, mid + 1, end)
    merge(arr, start, mid, end)
  }
}

function merge(arr, start, mid, end) {
  const n1 = mid - start + 1
  const n2 = end - mid
  const left = [], right = []
  for(let i = start; i <= mid; i++) left.push(arr[i])
  for(let i = mid + 1; i <= end; i++) right.push(arr[i])
  let i = 0, j = 0, k = start
  while(i < n1 && j < n2) {
    if(left[i] <= right[j]) {
      arr[k] = left[i]
      i++
    } else {
      arr[k] = right[j]
      j++
    }
    k++
  }
  while(i < n1) {
    arr[k++] = left[i++]
  }
  while(j < n2) {
    arr[k++] = right[j++]
  }
}


module.exports = {
    MySort : MySort
};
