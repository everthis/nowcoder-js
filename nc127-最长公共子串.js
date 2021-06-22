/**
 * longest common substring
 * @param str1 string字符串 the string
 * @param str2 string字符串 the string
 * @return string字符串
 */
function LCS(str1, str2) {
  const m = str1.length, n = str2.length
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
  const { max } = Math
  let maxLen = 0, last = 0
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if(str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = 0
      }
      if(dp[i][j] > maxLen) {
        maxLen = dp[i][j]
        last = j - 1
      }
    }
  }
  if(maxLen === 0) return '-1'
  return str2.slice(last - maxLen + 1, last + 1)
}
module.exports = {
  LCS : LCS
};
