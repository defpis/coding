/**
 * 给定一个无序数组，找出所有数字满足：它之前的数都小于它，它之后的数都大于它
 * @param {Array} arr 输入数组
 */
function findNumbers(arr) {
  const maxArr = [];
  let maxVal = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    maxArr[i] = maxVal = Math.max(arr[i], maxVal);
  }
  const minArr = [];
  let minVal = Infinity;
  for (let j = arr.length - 1; j >= 0; j--) {
    minArr[j] = minVal = Math.min(arr[j], minVal);
  }
  return maxArr.filter((value, index) => value === minArr[index]);
}

console.log(findNumbers([4, 3, 1, 2, 6, 7, 9, 8, 10])); // [ 6, 7, 10 ]
