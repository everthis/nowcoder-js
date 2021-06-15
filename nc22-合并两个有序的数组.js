/**
 * 
 * @param A int整型一维数组 
 * @param B int整型一维数组 
 * @return void
 */
 function merge(A, m, B, n) {
  let i = 0, j = 0, idx = 0
  while(i < m + idx && j < n) {
    if(A[i] <= B[j]) i++
    else { // A[i] > B[j]
      A.splice(i++, 0, B[j++])
      idx++
    }
  }
  while(j < n) {
    A[i++] = B[j++]
  }
}

module.exports = {
  merge : merge
};
