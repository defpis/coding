const { expect } = require("chai");
const quickSort = require("./QuickSort");

describe("QuickSort", () => {
  it("should exports be defined", (done) => {
    expect(quickSort).to.be.ok;
    done();
  });
  it("should sort array", (done) => {
    expect(quickSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    done();
  });
});
