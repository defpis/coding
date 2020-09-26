const { expect } = require("chai");
const findNumbers = require("./EvenNumberDigits");

describe("EvenNumberDigits", () => {
  it("should return how many of them contain an even number of digits", (done) => {
    expect(findNumbers([12, 345, 2, 6, 7896])).to.equal(2);
    done();
  });
});
