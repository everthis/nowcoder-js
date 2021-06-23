/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 将给定数组排序
 * @param arr int整型一维数组 待排序的数组
 * @return int整型一维数组
 */
function MySort(arr) {
  qs(arr, 0, arr.length - 1)
  return arr.slice()
}
function qs(arr, start, end) {
  if(start >= end) return
  const p = partition(arr, start, end)
  qs(arr, start, p)
  qs(arr, p + 1, end)
}

function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

function compare(a, b) {
  return a - b
}

function partition(arr, start, end) {
  let pivot = arr[start]
  let s = start
  let e = end
  while(true) {
    while(arr[s] < pivot) {
      s++
    }
    while(pivot < arr[e]) {
      e--
    }
    if(s === e) {
      return s
    } else if(s > e) {
      return s - 1
    }
    swap(arr, s, e)
    s++
    e--
  }
}
module.exports = {
    MySort : MySort
};


// another

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
