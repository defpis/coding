/**
 * 按照奇偶排列，偶在前，奇在后
 * @param {Array} arr 输入数组
 */
function sortByParity(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const c1 = arr[start] % 2 === 1;
    const c2 = arr[end] % 2 === 0;
    // 前奇后偶，交换
    if (c1 && c2) {
      const tmp = arr[start];
      arr[start] = arr[end];
      arr[end] = tmp;
      start++;
      end--;
    }
    // 前奇后奇
    if (c1 && !c2) {
      end--;
    }
    // 前偶后偶
    if (!c1 && c2) {
      start++;
    }
    // 前偶后奇
    if (!c1 && !c2) {
      start++;
      end--;
    }
  }
  return arr;
}
