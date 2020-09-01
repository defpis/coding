/**
 * 插入排序，不改变原数组顺序
 * @param {Array} arr 输入数组
 */
function insertionSort(arr) {
  const newArr = [...arr];

  const len = newArr.length;
  if (len < 2) {
    return newArr;
  }

  for (let i = 1; i < len; i++) {
    const tmp = newArr[i];
    let cursor = i;
    while (tmp < newArr[cursor - 1]) {
      newArr[cursor] = newArr[cursor - 1];
      cursor--;
    }
    newArr[cursor] = tmp;
  }

  return newArr;
}

module.exports = insertionSort;
