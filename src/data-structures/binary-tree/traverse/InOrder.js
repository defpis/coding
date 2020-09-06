function helper(root, res) {
  if (root) {
    helper(root.left, res);
    res.push(root.val);
    helper(root.right, res);
  }
}

function InOrder(root) {
  const res = [];
  helper(root, res);
  return res;
}

module.exports = InOrder;
