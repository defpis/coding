/*
// 自底而上
function maxDepth(root) {
  if (!root) return 0;

  resL = maxDepth(root.left);
  resR = maxDepth(root.right);

  return Math.max(resL, resR) + 1;
}
*/

// 自顶而下
function maxDepth(root) {
  let depth = 0;

  function helper(n, d = 0) {
    if (!n) return;

    if (!n.left && !n.right) {
      depth = Math.max(depth, d + 1);
    }

    helper(n.left, d + 1);
    helper(n.right, d + 1);
  }

  helper(root);
  return depth;
}

module.exports = maxDepth;
