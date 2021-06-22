/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 计算两个数之和
 * @param s string字符串 表示第一个整数
 * @param t string字符串 表示第二个整数
 * @return string字符串
 */
function solve(s, t) {
  if (s.length === 0 || t.length === 0) return s || t
  let inc = false
  let res = ''
  const m = s.length, n = t.length
  let i = m - 1, j = n - 1
  while(i >= 0 || j >= 0) {
    const num1 = i >= 0 ? +s[i] : 0, num2 = j >= 0 ? +t[j] : 0
    const tmp = num1 + num2 + (inc ? 1 : 0)
    inc = tmp > 9 ? true : false
    res = tmp % 10 + res
    i--
    j--
  }
  
  if(inc) res = '1' + res
  return res
}
module.exports = {
  solve : solve
};
