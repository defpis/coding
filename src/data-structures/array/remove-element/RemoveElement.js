/**
 * 从数组中移除对应的值并返回新长度
 * @param {Array} arr 输入数组
 * @param {Number} target 删除目标
 */
function removeElement(arr, target) {
  let cursor = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      arr[cursor] = arr[i];
      cursor++;
    }
  }
  return cursor;
}
