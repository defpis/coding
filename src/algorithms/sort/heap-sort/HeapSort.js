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
 * 保持大根堆
 * @param {Array} arr 输入数组
 * @param {Integer} i 父节点索引
 * @param {Integer} size 数组有效长度
 */
function maxHeapify(arr, i, size) {
  const l = i * 2 + 1;
  const r = i * 2 + 2;
  let maxIndex = i;

  if (l < size && arr[l] > arr[maxIndex]) {
    maxIndex = l;
  }

  if (r < size && arr[r] > arr[maxIndex]) {
    maxIndex = r;
  }

  if (maxIndex !== i) {
    swap(arr, i, maxIndex);
    maxHeapify(arr, maxIndex, size);
  }
}

/**
 * 堆排序，不改变原数组顺序
 * @param {Array} arr 输入数组
 */
function heapSort(arr) {
  const newArr = [...arr];

  const len = newArr.length;
  if (len < 2) {
    return newArr;
  }

  for (let i = Math.floor(len / 2 - 1); i >= 0; i--) {
    maxHeapify(newArr, i, len);
  }

  for (let j = 0; j < len; j++) {
    const lastIndex = len - 1 - j;
    swap(newArr, 0, lastIndex);
    maxHeapify(newArr, 0, lastIndex);
  }

  return newArr;
}

module.exports = heapSort;
