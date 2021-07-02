function NumberOf1(n) {
  const str = (n >>> 0).toString(2)
  let res = 0
  for(let ch of str) {
    if(ch === '1') res++
  }
  return res
}
module.exports = {
    NumberOf1 : NumberOf1
};
