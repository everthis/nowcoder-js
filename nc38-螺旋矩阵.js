/**
 * 
 * @param matrix int整型二维数组 
 * @return int整型一维数组
 */
function spiralOrder(matrix) {
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let idx = 0
  const res = []
  if(matrix.length === 0 || matrix == null) return res
  const m = matrix.length, n = matrix[0].length
  const visited = Array.from({ length: m }, () => Array(n).fill(0))

  res.push(matrix[0][0])
  visited[0][0] = 1
  let i = 0, j = 0, pre = 0
  while(res.length < m * n) {
    pre = idx
    switch(idx) {
      case 0:
        if (j === n - 1 || visited[i][j + 1] === 1) {
          idx = 1
        }
        break
      case 1:
        if (i === m - 1 || visited[i + 1][j] === 1) {
          idx = 2
        }
        break
      case 2:
        if (j === 0 || visited[i][j - 1] === 1) {
          idx = 3
        }
        break
      case 3:
        if (i === 0 || visited[i - 1][j] === 1) {
          idx = 0
        }
        break
      default:

    }
    if(pre === idx) {
      i += dirs[idx][0] 
      j += dirs[idx][1] 
      res.push(matrix[i][j])
      visited[i][j] = 1
    }
  }
  
  return res
}

module.exports = {
  spiralOrder : spiralOrder
};
