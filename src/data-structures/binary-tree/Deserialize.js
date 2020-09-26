function deserialize(str, cvt = (v) => Number(v)) {
  const arr = str.split("");

  function helper() {
    if (arr.length === 0) return;

    const val = arr.shift();

    if (val === "#") return;

    const node = { val: cvt(val) };

    const left = helper();
    if (left) node.left = left;

    const right = helper();
    if (right) node.right = right;

    return node;
  }

  return helper();
}

module.exports = deserialize;
