const map = {}
function Fibonacci(n) {
  if(map[n] != null) return map[n]
  if(n === 0) return 0
  if(n === 1) return 1
  const res = Fibonacci(n - 1) + Fibonacci(n - 2)
  map[n] = res
  return res
}
module.exports = {
    Fibonacci : Fibonacci
};
