/**
 * 交换数值
 * @param {Array} arr 输入数组
 * @param {Integer} i 交换索引
 * @param {Integer} j 交换索引
 */
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

/**
 * 以基准值分区
 * @param {Array} arr 输入数组
 * @param {Integer} start 起始索引
 * @param {Integer} end 终止索引
 */
function partition(arr, start, end) {
  const pivot = arr[end];
  let cursor = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, cursor);
      cursor++;
    }
  }

  swap(arr, end, cursor);
  return cursor;
}

/**
 * 递归排序
 * @param {Array} arr 输入数组
 * @param {Integer} start 起始索引
 * @param {Integer} end 终止索引
 */
function sort(arr, start, end) {
  if (start >= end) {
    return;
  }

  const cursor = partition(arr, start, end);

  sort(arr, start, cursor - 1);
  sort(arr, cursor + 1, end);
}

/**
 * 快速排序，不改变原数组顺序
 * @param {Array} arr 输入数组
 */
function quickSort(arr) {
  const newArr = [...arr];

  const len = newArr.length;
  if (len < 2) {
    return newArr;
  }

  sort(newArr, 0, len - 1);

  return newArr;
}

module.exports = quickSort;
