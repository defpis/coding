// p and q are different and both values will exist in the binary tree.
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;

  const resL = lowestCommonAncestor(root.left, p, q);
  const resR = lowestCommonAncestor(root.right, p, q);

  return resL && resR ? root : resL || resR;
}

module.exports = lowestCommonAncestor;
