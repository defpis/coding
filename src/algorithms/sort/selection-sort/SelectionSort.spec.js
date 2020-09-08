const { expect } = require("chai");
const selectionSort = require("./SelectionSort");

describe("SelectionSort", () => {
  it("should sort array", (done) => {
    expect(selectionSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    done();
  });
});
