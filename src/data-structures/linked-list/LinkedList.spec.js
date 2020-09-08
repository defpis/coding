const { expect } = require("chai");
const { linkedList, linkedListWithLoop } = require("./LinkedList");
const findLoop = require("./FindLoop");

describe("LinkedList", () => {
  describe("FindLoop", () => {
    it("should findLoop return false", (done) => {
      expect(findLoop(linkedList)).to.equal(false);
      done();
    });
    it("should findLoop return true", (done) => {
      expect(findLoop(linkedListWithLoop)).to.equal(true);
      done();
    });
  });
});
