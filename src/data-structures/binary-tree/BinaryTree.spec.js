const { expect } = require("chai");
const { binaryTree } = require("./BinaryTree");
const PreOrder = require("./traverse/Preorder");
const InOrder = require("./traverse/InOrder");
const PostOrder = require("./traverse/PostOrder");
const LevelOrder = require("./traverse/LevelOrder");

describe("BinaryTree", () => {
  it("should traverse by pre-order", (done) => {
    expect(PreOrder(binaryTree)).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
    done();
  });
  it("should traverse by in-order", (done) => {
    expect(InOrder(binaryTree)).to.deep.equal([3, 2, 4, 1, 6, 5, 7]);
    done();
  });
  it("should traverse by post-order", (done) => {
    expect(PostOrder(binaryTree)).to.deep.equal([3, 4, 2, 6, 7, 5, 1]);
    done();
  });
  it("should traverse by level-order", (done) => {
    expect(LevelOrder(binaryTree)).to.deep.equal([[1], [2, 5], [3, 4, 6, 7]]);
    done();
  });
});
