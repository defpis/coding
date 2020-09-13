function inOrderAndPostOrder(inorder, postorder) {
  const _postorder = [...postorder];

  const indexMap = inorder.reduce(
    (acc, curr, index) => ((acc[curr] = index), acc),
    {}
  );

  function build(start, end) {
    if (start > end) return null;
    const val = _postorder.pop();
    return {
      val,
      right: build(indexMap[val] + 1, end),
      left: build(start, indexMap[val] - 1),
    };
  }

  return build(0, inorder.length - 1);
}

module.exports = inOrderAndPostOrder;
