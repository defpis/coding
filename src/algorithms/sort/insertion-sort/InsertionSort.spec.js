const { expect } = require("chai");
const insertionSort = require("./InsertionSort");

describe("InsertionSort", () => {
  it("should sort array", (done) => {
    expect(insertionSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    done();
  });
});
