/**
  * 
  * @param s string字符串 
  * @return bool布尔型
  */
function isValid(s) {
  const stack = []
  const map = {
    '}': '{',
    ']': '[',
    ')': '(',
  }
  for(let ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') stack.push(ch)
    else {
      if(stack.length === 0) return false
      if(stack[stack.length - 1] !== map[ch]) return false
      else stack.pop()
    }
  }
  return stack.length === 0
}
module.exports = {
  isValid : isValid
};
