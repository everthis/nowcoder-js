const memo = {
  0: 0,
  1: 1,
  2: 1,
}
function Fibonacci(n) {
  if(memo[n] != null) return memo[n]
  const res = Fibonacci(n - 1) + Fibonacci(n - 2)
  memo[n] = res
  return res
}
module.exports = {
  Fibonacci : Fibonacci
};
