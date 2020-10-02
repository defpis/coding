/**
 * 从右到左取得当前索引的最大值，初始值为-1
 * @param {Array} arr 输入数组
 */
function replaceGreatestElements(arr) {
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    const tmp = Math.max(arr[i], max);
    arr[i] = max;
    max = tmp;
  }
  return arr;
}
