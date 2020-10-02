/**
 * 移动0到数组末尾
 * @param {Array} arr 输入数组
 */
function moveZeroes(arr) {
  let cursor = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[cursor] = arr[i];
      cursor++;
    }
  }
  for (let j = cursor; j < arr.length; j++) {
    arr[j] = 0;
  }
  return arr;
}
