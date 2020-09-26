const { expect } = require("chai");
const sortSquares = require("./SortSquares");

describe("SortSquares", () => {
  it("should return an array of the squares of each number, also in sorted non-decreasing order", (done) => {
    expect(sortSquares([-4, -1, 0, 3, 10])).to.deep.equal([0, 1, 9, 16, 100]);
    done();
  });
});
