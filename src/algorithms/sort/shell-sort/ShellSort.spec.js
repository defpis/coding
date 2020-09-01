const { expect } = require("chai");
const shellSort = require("./ShellSort");

describe("ShellSort", () => {
  it("should exports be defined", (done) => {
    expect(shellSort).to.be.ok;
    done();
  });
  it("should sort array", (done) => {
    expect(shellSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    done();
  });
});
