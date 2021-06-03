function MoreThanHalfNum_Solution(numbers) {
  const n = numbers.length, moreThanHalf = ~~(n / 2) + 1
  let candidate = numbers[0], cnt = 1
  for(let i = 1; i < n; i++) {
    if(numbers[i] === candidate) cnt++
    else {
      if(cnt) {
        cnt--
      }else {
        candidate = numbers[i]
        cnt = 1
      }
    }
  }
  let num = 0
  for(let e of numbers) {
    if(e === candidate) num++
  }
  if (num >= moreThanHalf) return candidate
  return -1
}

module.exports = {
  MoreThanHalfNum_Solution : MoreThanHalfNum_Solution
};
