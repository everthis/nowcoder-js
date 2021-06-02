const readline = require('readline');
function isInTriangle(p1, p2, p3, p) {
    // 保证p1，p2，p3是逆时针顺序
    if(product(p1, p2, p3) < 0) return isInTriangle(p1, p3, p2, p);
    if(product(p1, p2, p) > 0 && product(p2, p3, p) > 0 && product(p3, p1, p) > 0) return true;
    return false;
}
function product(p1, p2, p3) {
    // 首先根据坐标计算p1p2和p1p3的向量，然后再计算叉乘
    // p1p2 向量表示为 (p2.x-p1.x,p2.y-p1.y)
    // p1p3 向量表示为 (p3.x-p1.x,p3.y-p1.y)
    return (p2.x-p1.x)*(p3.y-p1.y) - (p2.y-p1.y)*(p3.x-p1.x);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let num = 0
const arr = []
rl.on('line', function(line){
  num += 1
  const tokens = line.split(' ').map(e => +e);
  const el = {x: tokens[0], y: tokens[1]};
  arr.push(el)
  if (num === 4) {
    rl.close();
    const result = isInTriangle(arr[0], arr[1], arr[2], arr[3])
    console.log(result ? 'Yes' : 'No')
  }
});

