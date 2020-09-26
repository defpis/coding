function findNumbers(arr) {
  const len = arr.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i].toString().length % 2 === 0) {
      count++;
    }
  }
  return count;
}

module.exports = findNumbers;
