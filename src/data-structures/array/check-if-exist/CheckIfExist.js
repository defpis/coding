/**
 * 判断是否存在`N = 2 * M`
 * @param {Array} arr 输入数组
 */
function checkIfExist(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i !== j && arr[i] === 2 * arr[j]) {
        return true;
      }
    }
  }
  return false;
}
