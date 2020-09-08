/*
// 递归实现
function helper(root, res) {
  if (root) {
    res.push(root.val);
    helper(root.left, res);
    helper(root.right, res);
  }
}

function preOrder(root) {
  const res = [];
  helper(root, res);
  return res;
}
*/

// 非递归实现
function preOrder(root) {
  const res = [];
  const s = [];
  let n = root;
  while (n || s.length) {
    while (n) {
      res.push(n.val);
      s.push(n);
      n = n.left;
    }
    n = s.pop();
    n = n.right;
  }
  return res;
}

module.exports = preOrder;
