function findMaxConsecutiveOnes(arr) {
  const len = arr.length;
  let maxCount = 0;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i]) {
      count++;
    } else {
      maxCount = Math.max(maxCount, count);
      count = 0;
    }
  }
  maxCount = Math.max(maxCount, count);
  return maxCount;
}

module.exports = findMaxConsecutiveOnes;
