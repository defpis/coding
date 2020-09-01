/**
 * 归并排序，不改变原数组顺序
 * @param {Array} arr 输入数组
 */
function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) {
    return [...arr];
  }

  const mid = Math.floor(len / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, len));

  return merge(left, right);
}

/**
 * 合并数组
 * @param {Array} left 左边数组
 * @param {Array} right 右边数组
 */
function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(...left, ...right);
}

module.exports = mergeSort;
