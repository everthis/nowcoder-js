const inStack = [];
const outStack = [];

function push(node) {
  inStack.push(node);
}
function pop() {
  while (inStack.length) outStack.push(inStack.pop());
  const res = outStack.pop();
  while (outStack.length) inStack.push(outStack.pop());
  return res;
}
module.exports = {
  push: push,
  pop: pop,
};
