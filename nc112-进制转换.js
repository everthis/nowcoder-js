/**
 * 进制转换
 * @param M int整型 给定整数
 * @param N int整型 转换到的进制
 * @return string字符串
 */
function solve(M, N) {
    // write code here
  return M.toString(N).toUpperCase()
}
module.exports = {
    solve : solve
};
