function hasPathSum(root, sum) {
  const result = [];

  function helper(root, sum, res = []) {
    if (!root) return;

    res.push(root.val);

    if (!root.left && !root.right && sum === root.val) {
      result.push([...res]);
    }

    helper(root.left, sum - root.val, res);
    helper(root.right, sum - root.val, res);

    res.pop();
  }

  helper(root, sum);
  return result; // return !!result.length;
}

/*
// 如果不需要获取路径，仅仅判断是否存在符合的情况
function hasPathSum(root, sum) {
  if (!root) return false;
  if (!root.left && !root.right) return sum === root.val;
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
}
*/

module.exports = hasPathSum;
