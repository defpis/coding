function helper(root, res) {
  let last,
    nLast = root;
  const queue = root ? [root] : [];
  let level = [];
  while (queue.length) {
    const n = queue.shift();
    level.push(n.val);
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
      res.push(level);
      level = [];
    }
  }
}

function levelOrder(root) {
  const res = [];
  helper(root, res);
  return res;
}

module.exports = levelOrder;
