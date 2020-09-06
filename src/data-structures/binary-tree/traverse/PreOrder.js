function helper(root, res) {
  if (root) {
    res.push(root.val);
    helper(root.left, res);
    helper(root.right, res);
  }
}

function PreOrder(root) {
  const res = [];
  helper(root, res);
  return res;
}

module.exports = PreOrder;
