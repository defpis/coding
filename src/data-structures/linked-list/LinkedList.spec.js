const { expect } = require("chai");
const LinkedList = require("./LinkedList");

describe("LinkedList", () => {
  it("should exports be defined", (done) => {
    expect(LinkedList).to.be.ok;
    done();
  });
});
