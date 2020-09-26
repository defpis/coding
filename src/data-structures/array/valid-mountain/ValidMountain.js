/**
 * 判断是否只有一个波峰
 * @param {Array} arr 输入数组
 */
function validMountain(arr) {
  const len = arr.length;
  if (len < 3) {
    return false;
  }
  let crest = 0;
  let trough = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      crest++;
    }
    if (arr[i - 1] >= arr[i] && arr[i] <= arr[i + 1]) {
      trough++;
    }
  }
  return crest === 1 && trough === 0;
}
