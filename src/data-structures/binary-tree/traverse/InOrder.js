/*
// 递归实现
function helper(root, res) {
  if (root) {
    helper(root.left, res);
    res.push(root.val);
    helper(root.right, res);
  }
}

function inOrder(root) {
  const res = [];
  helper(root, res);
  return res;
}
*/

// 非递归实现
function inOrder(root) {
  const res = [];
  const s = [];
  let n = root;
  while (n || s.length) {
    while (n) {
      s.push(n);
      n = n.left;
    }
    n = s.pop();
    res.push(n.val);
    n = n.right;
  }
  return res;
}

module.exports = inOrder;
