const { expect } = require("chai");
const climbStairs = require("./ClimbStairs");

describe("ClimbStairs", () => {
  it("should exports be defined", (done) => {
    expect(climbStairs).to.be.ok;
    done();
  });
  it("0 stairs", (done) => {
    expect(climbStairs(0)).to.equal(0);
    done();
  });
  it("1 stairs", (done) => {
    expect(climbStairs(1)).to.equal(1);
    done();
  });
  it("2 stairs", (done) => {
    expect(climbStairs(2)).to.equal(2);
    done();
  });
  it("3 stairs", (done) => {
    expect(climbStairs(3)).to.equal(3);
    done();
  });
  it("4 stairs", (done) => {
    expect(climbStairs(4)).to.equal(5);
    done();
  });
  it("10 stairs", (done) => {
    expect(climbStairs(10)).to.equal(89);
    done();
  });
});
