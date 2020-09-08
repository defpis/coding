/*
// 递归实现
function helper(root, res) {
  if (root) {
    helper(root.left, res);
    helper(root.right, res);
    res.push(root.val);
  }
}

function postOrder(root) {
  const res = [];
  helper(root, res);
  return res;
}
*/

// 非递归实现
function postOrder(root) {
  const res = [];
  const s = [];
  let n = root;
  while (n || s.length) {
    while (n) {
      s.push(n);
      n = n.left;
    }
    n = s.pop();
    if (n.__FLAG__) {
      res.push(n.val);
      n = null;
    } else {
      n.__FLAG__ = true;
      s.push(n);
      n = n.right;
    }
  }
  return res;
}

module.exports = postOrder;
