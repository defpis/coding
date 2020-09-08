const { expect } = require("chai");
const shellSort = require("./ShellSort");

describe("ShellSort", () => {
  it("should sort array", (done) => {
    expect(shellSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    done();
  });
});
