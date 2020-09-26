function serialize(root) {
  const res = [];

  function helper(root) {
    if (root) {
      res.push(root.val);
      helper(root.left);
      helper(root.right);
    } else {
      res.push("#");
    }
  }

  helper(root);

  return res.join("");
}

module.exports = serialize;
