const { expect } = require("chai");
const bubbleSort = require("./BubbleSort");

describe("BubbleSort", () => {
  it("should exports be defined", (done) => {
    expect(bubbleSort).to.be.ok;
    done();
  });
  it("should sort array", (done) => {
    expect(bubbleSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    done();
  });
});
