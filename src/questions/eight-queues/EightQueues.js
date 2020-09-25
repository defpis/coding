function checkQueue(row, col, matrix) {
  for (let r = 0; r < row; r++) {
    const c = matrix[r];
    if (col === c || Math.abs(col - c) === row - r) {
      return false;
    }
  }
  return true;
}

function placeQueue(size = 8) {
  const res = [];

  function placeRow(row = 0, matrix = []) {
    if (row === size) {
      res.push([...matrix]);
      return;
    }

    for (let col = 0; col < size; col++) {
      matrix[row] = col;

      if (checkQueue(row, col, matrix)) {
        placeRow(row + 1, matrix);
      }
    }
  }

  placeRow();

  //   1 2 3 4 5 6 7 8
  // 1 · · · · · · X ·
  // 2 · · · X · · · ·
  // 3 · X · · · · · ·
  // 4 · · · · · · · X
  // 5 · · · · · X · ·
  // 6 X · · · · · · ·
  // 7 · · X · · · · ·
  // 8 · · · · X · · ·
  // res.forEach((matrix) => {
  //   console.log(`  ${[...new Array(size)].map((_, i) => i + 1).join(" ")}`);
  //   matrix.forEach((c, r) => {
  //     const rowArr = new Array(size).fill("·");
  //     rowArr[c] = "X";
  //     console.log(`${r + 1} ${rowArr.join(" ")}`);
  //   });
  //   console.log("\n");
  // });

  return res;
}

module.exports = placeQueue;
