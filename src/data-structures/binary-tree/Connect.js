function connect(root) {
  let last,
    nLast = root;
  const queue = root ? [root] : [];
  let level = [];
  while (queue.length) {
    const n = queue.shift();
    level.push(n);
    if (n.left) {
      last = n.left;
      queue.push(n.left);
    }
    if (n.right) {
      last = n.right;
      queue.push(n.right);
    }
    if (n === nLast) {
      nLast = last;
      level.reduce((prev, curr) => ((prev.next = curr), curr)).next = null;
      level = [];
    }
  }
  return root;
}

module.exports = connect;
