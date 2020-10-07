function shootBalloons(arr) {
  const len = arr.length;
  if (!len) {
    return 0;
  }
  arr.sort((a, b) => a[0] - b[0]);
  let [l, r] = arr[0];
  let count = 1;
  arr.forEach(([nl, nr]) => {
    if (nl < r && nl >= l) {
      l = nl;
      r = nr < r ? nr : r;
    } else {
      count++;
      l = nl;
      r = nr;
    }
  });
  return count;
}

console.log(
  shootBalloons([
    [2, 5],
    [1, 4],
    [3, 6],
    [4, 7],
    [5, 8],
  ])
);
