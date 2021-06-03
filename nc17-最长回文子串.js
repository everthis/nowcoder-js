/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param A string字符串 
 * @param n int整型 
 * @return int整型
 */
export function getLongestPalindrome(A: string, n: number): number {
  let res = 0
  for(let i = 0, n = A.length; i < n; i++) {
    const first = chk(A, i, i)
    res = Math.max(res, first)
    if(i + 1 < n) {
      const second = chk(A, i, i + 1)
      res = Math.max(res, second)
    }
  }
  return res
}

function chk(str, i, j) {
  while(str[i] === str[j] && i >= 0 && j < str.length) {
    i--
    j++
  }

  return j - i - 1
}
