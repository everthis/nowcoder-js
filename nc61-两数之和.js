/**
  * 
  * @param numbers int整型一维数组 
  * @param target int整型 
  * @return int整型一维数组
  */
function twoSum( numbers ,  target ) {
  const hash = {}
  const res = []
  for(let i = 0, n = numbers.length; i < n; i++) {
    const e = numbers[i]
    if(hash[target - e] != null) {
      return [hash[target - e] + 1, i + 1]
    } else {
      hash[e] = i
    }
  }
  return res
}
module.exports = {
    twoSum : twoSum
};
