/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param s string 一个字符串由小写字母构成，长度小于5000
 * @return int
 */
function longestPalindromeSubSeq( s ) {
   let res = 1, n = s.length
   const dp = Array.from({ length: n }, () => Array(n).fill(0))
   for(let i = 0; i < n; i++) {
     dp[i][i] = 1
   }
   for(let i = 0; i < n - 1; i++) {
     dp[i][i + 1] = s[i] === s[i + 1] ? 2 : 1 
   }
   for(let j = 2; j < n; j++) {
     for(let i = j - 2; i >= 0; i--) {
       if(s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2
       else dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
       res = Math.max(res, dp[i][j])
     }
   }
   return res
}
module.exports = {
    longestPalindromeSubSeq : longestPalindromeSubSeq
};
