const { expect } = require("chai");
const binarySearch = require("./BinarySearch");

describe("BinarySearch", () => {
  it("should return correct index of target", (done) => {
    expect(binarySearch([3, 2, 1], 2)).to.equal(1);
    done();
  });
  it("should return -1 when not found", (done) => {
    expect(binarySearch([3, 2, 1], 4)).to.equal(-1);
    done();
  });
});
