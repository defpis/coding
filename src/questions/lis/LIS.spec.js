const { expect } = require("chai");
const { getLISLen, getLIS } = require("./LIS");

const arr = [3, 5, 1, 6, 2, 7, 9, 0, 8, 4]; // 5

describe("LIS", () => {
  it("return correct max length", (done) => {
    expect(getLISLen(arr)).to.equal(5);
    done();
  });
  it("return correct longest increasing subsequence", (done) => {
    expect(getLIS(arr)).to.deep.equal([3, 5, 6, 7, 9]);
    done();
  });
});
