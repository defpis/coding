const { expect } = require("chai");
const mergeSort = require("./MergeSort");

describe("MergeSort", () => {
  it("should exports be defined", (done) => {
    expect(mergeSort).to.be.ok;
    done();
  });
  it("should sort array", (done) => {
    expect(mergeSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    done();
  });
});
