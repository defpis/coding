/**
 * 找出第三大的数字
 * @param {Array} arr 输入数组
 */
function findThirdMaximum(arr) {
  const newArr = Array.from(new Set(arr)).sort((a, b) => b - a);
  return newArr.length < 3 ? newArr[0] : newArr[2];
}
