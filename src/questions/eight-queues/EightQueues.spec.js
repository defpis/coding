const { expect } = require("chai");
const placeQueue = require("./EightQueues");

describe("EightQueues", () => {
  it("place queues without conflict", (done) => {
    expect(placeQueue()).to.be.ok;
    done();
  });
});
