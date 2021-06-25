function GetLeastNumbers_Solution(input, k) {
  if(k > input.length) return []
  const pq = new PriorityQueue()
  for(let e of input) {
    pq.push(e)
    if(pq.size() > k) pq.pop()
  }
  const res = []
  while(!pq.isEmpty()) res.push(pq.pop())
  res.reverse()
  return res
}

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this.heap = []
    this.top = 0
    this.comparator = comparator
  }
  size() {
    return this.heap.length
  }
  isEmpty() {
    return this.size() === 0
  }
  peek() {
    return this.heap[this.top]
  }
  push(...values) {
    values.forEach((value) => {
      this.heap.push(value)
      this.siftUp()
    })
    return this.size()
  }
  pop() {
    const poppedValue = this.peek()
    const bottom = this.size() - 1
    if (bottom > this.top) {
      this.swap(this.top, bottom)
    }
    this.heap.pop()
    this.siftDown()
    return poppedValue
  }
  replace(value) {
    const replacedValue = this.peek()
    this.heap[this.top] = value
    this.siftDown()
    return replacedValue
  }

  parent = (i) => ((i + 1) >>> 1) - 1
  left = (i) => (i << 1) + 1
  right = (i) => (i + 1) << 1
  greater = (i, j) => this.comparator(this.heap[i], this.heap[j])
  swap = (i, j) => ([this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]])
  siftUp = () => {
    let node = this.size() - 1
    while (node > this.top && this.greater(node, this.parent(node))) {
      this.swap(node, this.parent(node))
      node = this.parent(node)
    }
  }
  siftDown = () => {
    let node = this.top
    while (
      (this.left(node) < this.size() && this.greater(this.left(node), node)) ||
      (this.right(node) < this.size() && this.greater(this.right(node), node))
    ) {
      let maxChild =
        this.right(node) < this.size() &&
        this.greater(this.right(node), this.left(node))
          ? this.right(node)
          : this.left(node)
      this.swap(node, maxChild)
      node = maxChild
    }
  }
}
module.exports = {
    GetLeastNumbers_Solution : GetLeastNumbers_Solution
};


// another

function GetLeastNumbers_Solution(input, k) {
  const arr = []
  if(k > input.length) return arr
  for(let e of input) {
    binaryInsert(arr, e, (a, b) => a - b)
    if(arr.length > k) arr.pop()
  }

  return arr
}
function binaryInsert(array, insertValue, comparator = (a, b) => a - b) {
  /*
  * These two conditional statements are not required, but will avoid the
  * while loop below, potentially speeding up the insert by a decent amount.
  * */
  if (array.length === 0 || comparator(array[0], insertValue) >= 0) {
    array.splice(0, 0, insertValue)
    return array;
  } else if (array.length > 0 && comparator(array[array.length - 1], insertValue) <= 0) {
    array.splice(array.length, 0, insertValue);
    return array;
  }
  let left = 0, right = array.length;
  let leftLast = 0, rightLast = right;
  while (left < right) {
    const inPos = Math.floor((right + left) / 2)
    const compared = comparator(array[inPos], insertValue);
    if (compared < 0) {
      left = inPos;
    } else if (compared > 0) {
      right = inPos;
    } else {
      right = inPos;
      left = inPos;
    }
    // nothing has changed, must have found limits. insert between.
    if (leftLast === left && rightLast === right) {
      break;
    }
    leftLast = left;
    rightLast = right;
  }
  // use right, because Math.floor is used
  array.splice(right, 0, insertValue);
  return array
}

module.exports = {
  GetLeastNumbers_Solution : GetLeastNumbers_Solution
};

// another

function GetLeastNumbers_Solution(input, k) {
  const arr = []
  if(k > input.length) return arr
  for(let e of input) {
    binaryInsert(arr, e, (a, b) => a - b)
    if(arr.length > k) arr.pop()
  }
  return arr
}

function binaryInsert(array, value, compareFn) {
  const index = binarySearch(array, value, compareFn);
  if (index < 0) {
    array.splice(-(index + 1), 0, value);
  } else {
    array.splice(index, 0, value)
  }
  return false;
};
function binarySearch(arr, target, compareFn) {
  let left = 0;  // inclusive
  let right = arr.length;  // exclusive
  let found;
  while (left < right) {
    const middle = left + ((right - left) >> 1);
    const compareResult = compareFn(target, arr[middle]);
    if (compareResult > 0) {
      left = middle + 1;
    } else {
      right = middle;
      // We are looking for the lowest index so we can't return immediately.
      found = !compareResult;
    }
  }
  // left is the index if found, or the insertion point otherwise.
  // ~left is a shorthand for -left - 1.
  return found ? left : ~left;
};

module.exports = {
  GetLeastNumbers_Solution : GetLeastNumbers_Solution
};
