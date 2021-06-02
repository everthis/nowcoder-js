/**
 * longest common subsequence
 * @param s1 string字符串 the string
 * @param s2 string字符串 the string
 * @return string字符串
 */
function LCS(s1, s2) {
  const n1 = s1.length, n2 = s2.length
  const dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0))
  for(let i = 1; i <= n1; i++) {
    for(let j = 1; j <= n2; j++) {
      if(s1[i - 1] === s2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
  
  let i = n1, j = n2
  const arr = []
  while(i > 0 && j > 0) {
    if(s1[i - 1] === s2[j - 1]) {
      arr.push(s1[i - 1])
      i--
      j--
    } else {
      if(dp[i][j - 1] > dp[i - 1][j]) {
        j--
      } else if(dp[i][j - 1] < dp[i - 1][j]) {
        i--
      } else if(dp[i][j - 1] === dp[i - 1][j]) {
        i--
      } 
    }
  }

  arr.reverse()
  const res = arr.join('')
  return res === '' ? '-1' : res
}
module.exports = {
    LCS : LCS
};

