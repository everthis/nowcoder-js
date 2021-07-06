function maxInWindows(num, size) {
  const n = num.length
  if(size > n) return []
  const res = [], win = []
  if(size === 0) return res
  for(let i = 0; i < n; i++) {
    const cur = num[i]
    let idx = binarySearch(win, cur, (a, b) => a - b)
    if(idx < 0) {
      win.splice(-(idx + 1), 0, cur)
    } else {
      win.splice(idx, 0, cur)
    }
    
    if(win.length > size) {
      const idx = binarySearch(win, num[i - size], (a, b) => a - b)
      win.splice(idx, 1)
    }

    if(win.length === size) {
      res.push(win[win.length - 1])
    }
  }
  return res
}

function binarySearch(arr, target, compareFn) {
  let left = 0;  // inclusive
  let right = arr.length;  // exclusive
  let found;
  while (left < right) {
    const middle = left + ((right - left) >> 1);
    const compareResult = compareFn(target, arr[middle]);
    if (compareResult > 0) {
      left = middle + 1;
    } else {
      right = middle;
      // We are looking for the lowest index so we can't return immediately.
      found = !compareResult;
    }
  }
  // left is the index if found, or the insertion point otherwise.
  // ~left is a shorthand for -left - 1.
  return found ? left : ~left;
};
module.exports = {
  maxInWindows : maxInWindows
};
