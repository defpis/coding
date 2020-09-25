/**
 * 二分搜索
 * @param {Array} arr 输入数组
 * @param {Any} target 搜索目标
 */
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  let mid;
  while (start < end) {
    mid = Math.floor((start + end) / 2);

    if (target < arr[mid]) {
      end = mid;
    } else if (target === arr[mid]) {
      break;
    } else {
      start = mid + 1;
    }
  }

  return start === end ? -1 : mid;
}

module.exports = binarySearch;
