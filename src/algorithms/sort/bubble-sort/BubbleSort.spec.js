const { expect } = require("chai");
const bubbleSort = require("./BubbleSort");

describe("BubbleSort", () => {
  it("should sort array", (done) => {
    expect(bubbleSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    done();
  });
});
