function heightCheck(arr) {
  const newArr = arr.slice().sort((a, b) => a - b);
  return arr.reduce((acc, v, i) => (v === newArr[i] ? acc : acc + 1), 0);
}
