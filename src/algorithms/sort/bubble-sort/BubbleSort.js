/**
 * 冒泡排序，不改变原数组顺序
 * @param {Array} arr 输入数组
 */
function bubbleSort(arr) {
  const newArr = [...arr];

  const len = newArr.length;
  if (len < 2) {
    return newArr;
  }

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        const tmp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = tmp;
      }
    }
  }

  return newArr;
}

module.exports = bubbleSort;
