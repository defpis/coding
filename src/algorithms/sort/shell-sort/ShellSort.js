/**
 * 希尔排序，不改变原数组顺序
 * @param {Array} arr 输入数组
 */
function shellSort(arr) {
  const newArr = [...arr];

  const len = newArr.length;
  if (len < 2) {
    return newArr;
  }

  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 变化间隔的插入排序
    for (let i = gap; i < len; i++) {
      const tmp = newArr[i];
      let cursor = i;
      while (tmp < newArr[cursor - gap]) {
        newArr[cursor] = newArr[cursor - gap];
        cursor -= gap;
      }
      newArr[cursor] = tmp;
    }
  }

  return newArr;
}

module.exports = shellSort;
