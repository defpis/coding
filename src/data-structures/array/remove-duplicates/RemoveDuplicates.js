/**
 * 移除重复值
 * @param {Array} arr 输入数组
 */
function removeDuplicates(arr) {
  if (!arr.length) {
    return 0;
  }
  let cursor = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[cursor - 1]) {
      arr[cursor] = arr[i];
      cursor++;
    }
  }
  arr.length = cursor;
  return cursor;
}
