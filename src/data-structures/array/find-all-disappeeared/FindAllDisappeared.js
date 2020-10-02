/**
 * 找出数组中未出现的数字
 * @param {Array} arr 输入数组
 */
function findAllDisappeared(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.abs(arr[i]) - 1;
    arr[j] = Math.abs(arr[j]) * -1;
  }
  return arr.map((v, i) => (v > 0 ? i + 1 : 0)).filter((v) => v);
}
