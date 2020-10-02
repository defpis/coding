function duplicateZeroes(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let cursor = arr.length - 1;
      while (cursor > i) {
        arr[cursor] = arr[cursor - 1];
        cursor--;
      }
      i++;
    }
  }
  return arr;
}

module.exports = duplicateZeroes;
