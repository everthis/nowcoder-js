/**
 * 反转字符串
 * @param str string字符串 
 * @return string字符串
 */
function solve( str ) {
  return str.split('').reverse().join('')
}
module.exports = {
    solve : solve
};

// another

/**
 * 反转字符串
 * @param str string字符串 
 * @return string字符串
 */
function solve( str ) {
  const arr = str.split('')
  let i = 0, j = arr.length - 1
  while(i < j) {
    swap(arr, i, j)
    i++
    j--
  }
  return arr.join('')
}
function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
module.exports = {
    solve : solve
};
