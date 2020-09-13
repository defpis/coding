const { expect } = require("chai");
const sqrt = require("./Sqrt");

describe("Sqrt", () => {
  it("sqrt(-1)", (done) => {
    expect(sqrt(-1)).to.equal(-1);
    done();
  });
  it("sqrt(0.1)", (done) => {
    expect(sqrt(0.1).toPrecision(9)).to.equal(Math.sqrt(0.1).toPrecision(9));
    done();
  });
  it("sqrt(1)", (done) => {
    expect(sqrt(1).toPrecision(9)).to.equal(Math.sqrt(1).toPrecision(9));
    done();
  });
  it("sqrt(2)", (done) => {
    expect(sqrt(2).toPrecision(9)).to.equal(Math.sqrt(2).toPrecision(9));
    done();
  });
  it("sqrt(10)", (done) => {
    expect(sqrt(10).toPrecision(9)).to.equal(Math.sqrt(10).toPrecision(9));
    done();
  });
});
