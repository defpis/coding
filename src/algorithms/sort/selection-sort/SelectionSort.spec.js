const { expect } = require("chai");
const selectionSort = require("./SelectionSort");

describe("SelectionSort", () => {
  it("should exports be defined", (done) => {
    expect(selectionSort).to.be.ok;
    done();
  });
  it("should sort array", (done) => {
    expect(selectionSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    done();
  });
});
