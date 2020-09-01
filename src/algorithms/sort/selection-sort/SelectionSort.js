/**
 * 选择排序，不改变原数组顺序
 * @param {Array} arr 输入数组
 */
function selectionSort(arr) {
  const newArr = [...arr];

  const len = newArr.length;
  if (len < 2) {
    return newArr;
  }

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (newArr[minIndex] > newArr[j]) {
        minIndex = j;
      }
    }
    const tmp = newArr[minIndex];
    newArr[minIndex] = newArr[i];
    newArr[i] = tmp;
  }

  return newArr;
}

module.exports = selectionSort;
