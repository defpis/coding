const { expect } = require("chai");
const insertionSort = require("./InsertionSort");

describe("InsertionSort", () => {
  it("should exports be defined", (done) => {
    expect(insertionSort).to.be.ok;
    done();
  });
  it("should sort array", (done) => {
    expect(insertionSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    done();
  });
});
