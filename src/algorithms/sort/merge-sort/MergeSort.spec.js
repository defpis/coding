const { expect } = require("chai");
const mergeSort = require("./MergeSort");

describe("MergeSort", () => {
  it("should sort array", (done) => {
    expect(mergeSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    done();
  });
});
