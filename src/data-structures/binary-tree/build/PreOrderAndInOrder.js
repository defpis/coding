function preOrderAndInOrder(preorder, inorder) {
  const _preorder = [...preorder];

  const indexMap = inorder.reduce(
    (acc, curr, index) => ((acc[curr] = index), acc),
    {}
  );

  function build(start, end) {
    if (start > end) return null;
    const val = _preorder.shift();
    return {
      val,
      left: build(start, indexMap[val] - 1),
      right: build(indexMap[val] + 1, end),
    };
  }

  return build(0, inorder.length - 1);
}

module.exports = preOrderAndInOrder;
