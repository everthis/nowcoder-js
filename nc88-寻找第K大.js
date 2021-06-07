/**
 * 
 * @param a int整型一维数组 
 * @param n int整型 
 * @param K int整型 
 * @return int整型
 */
function findKth(a, n, K) {
  const list = a
  let k = K
  const len = list.length
  let lo = 0
  let hi = len - 1
  let pivot = 0
  let t = len - k
  while(lo < hi) {
    pivot = partition(list, lo, hi)
    if(pivot === t) {
      break
    } else if(pivot < t) {
      lo = pivot + 1
    } else if(pivot > t) {
      hi = pivot - 1
    }
  }
  
  return list[t]
}

function partition(arr, s, e) {
  let t = arr[e]
  let i = s
  for(let j = s; j <= e - 1; j++) {
    if(arr[j] <= t) {
      swap(arr, i, j)
      i++
    }
  }
  swap(arr, i, e) 
  return i
}

function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

module.exports = {
    findKth : findKth
};
