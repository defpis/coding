function helper(root, res) {
  if (root) {
    helper(root.left, res);
    helper(root.right, res);
    res.push(root.val);
  }
}

function PostOrder(root) {
  const res = [];
  helper(root, res);
  return res;
}

module.exports = PostOrder;
