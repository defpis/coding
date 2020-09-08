const { expect } = require("chai");
const fibSeq = require("./FibSeq");

describe("FibSeq", () => {
  it("calc 0", (done) => {
    expect(fibSeq(0)).to.equal(0);
    done();
  });
  it("calc 2", (done) => {
    expect(fibSeq(2)).to.equal(1);
    done();
  });
  it("calc 3", (done) => {
    expect(fibSeq(3)).to.equal(2);
    done();
  });
  it("calc 4", (done) => {
    expect(fibSeq(4)).to.equal(3);
    done();
  });
  it("calc 5", (done) => {
    expect(fibSeq(5)).to.equal(5);
    done();
  });
  it("calc 20", (done) => {
    expect(fibSeq(20)).to.equal(6765);
    done();
  });
});
