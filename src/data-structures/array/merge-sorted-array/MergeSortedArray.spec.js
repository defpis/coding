const { expect } = require("chai");
const merge = require("./MergeSortedArray");

describe("MergeSortedArray", () => {
  it("should merge nums2 into nums1 as one sorted array", (done) => {
    expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).to.deep.equal([
      1,
      2,
      2,
      3,
      5,
      6,
    ]);
    done();
  });
});
