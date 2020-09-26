const { expect } = require("chai");
const findMaxConsecutiveOnes = require("./MaxConsecutiveOnes");

describe("MaxConsecutiveOnes", () => {
  it("should find the maximum number of consecutive 1s in this array", (done) => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).to.equal(3);
    done();
  });
});
