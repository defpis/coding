// function sortSquares(arr) {
//   // return arr.map((x) => x * x).sort((a, b) => a - b);
//   const newArr = [...arr];
//   if (newArr.length < 2) {
//     return newArr.map((x) => x * x);
//   }
//   // 插入排序严重影响效率
//   while (newArr[0] < 0) {
//     const v = Math.abs(newArr[0]);
//     let cursor = 1;
//     while (newArr[cursor] < v) {
//       newArr[cursor - 1] = newArr[cursor];
//       cursor++;
//     }
//     newArr[cursor - 1] = v;
//   }
//   return newArr.map((x) => x * x);
// }

function sortSquares(arr) {
  const len = arr.length;
  let j = 0;
  while (j < len && arr[j] < 0) {
    j++;
  }
  let i = j - 1;
  const res = [];
  while (i >= 0 && j < len) {
    const a = arr[i] * arr[i];
    const b = arr[j] * arr[j];
    if (a < b) {
      res.push(a);
      i--;
    } else {
      res.push(b);
      j++;
    }
  }
  while (i >= 0) {
    res.push(arr[i] * arr[i]);
    i--;
  }
  while (j < len) {
    res.push(arr[j] * arr[j]);
    j++;
  }
  return res;
}

module.exports = sortSquares;
