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

// another

function NumberOf1(n) {
  const mask = 1 << 31
  let res = 0
  while(n != 0) {
    if(n & mask) res++
    n <<= 1
  }
  return res
}
module.exports = {
    NumberOf1 : NumberOf1
};
