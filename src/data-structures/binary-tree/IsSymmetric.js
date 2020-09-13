/**
 * 递归遍历树构建数组
 * @param {Node} n 节点
 * @param {*} d 深度
 */
function helper(n, d = 0) {
  const depth = d + 1;

  if (!n) return [`#-${depth}`];

  return [
    ...helper(n.left, depth),
    `${n.val}-${depth}`,
    ...helper(n.right, depth),
  ];
}

/**
 * 判断一棵树是否纵轴对称
 * @param {Node} root 根节点
 */
function isSymmetric(root) {
  const arr = helper(root);
  const len = arr.length;

  let symmetric = true;
  for (let i = 0; i < Math.ceil(len / 2); i++) {
    if (arr[i] !== arr[len - 1 - i]) {
      symmetric = false;
      break;
    }
  }
  return symmetric;
}

module.exports = isSymmetric;
