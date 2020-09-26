function sortSquares(arr) {
  // return arr.map((x) => x * x).sort((a, b) => a - b);
  const newArr = [...arr];
  if (newArr.length < 2) {
    return newArr.map((x) => x * x);
  }
  // 插入排序严重影响效率
  while (newArr[0] < 0) {
    const v = Math.abs(newArr[0]);
    let cursor = 1;
    while (newArr[cursor] < v) {
      newArr[cursor - 1] = newArr[cursor];
      cursor++;
    }
    newArr[cursor - 1] = v;
  }
  return newArr.map((x) => x * x);
}

module.exports = sortSquares;
