const { expect } = require("chai");
const quickSort = require("./QuickSort");

describe("QuickSort", () => {
  it("should sort array", (done) => {
    expect(quickSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    done();
  });
});
