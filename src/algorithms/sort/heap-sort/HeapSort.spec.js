const { expect } = require("chai");
const heapSort = require("./HeapSort");

describe("HeapSort", () => {
  it("should sort array", (done) => {
    expect(heapSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    done();
  });
});
