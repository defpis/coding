const { expect } = require("chai");
const { binaryTree } = require("./BinaryTree");
const preOrder = require("./traverse/Preorder");
const inOrder = require("./traverse/InOrder");
const postOrder = require("./traverse/PostOrder");
const levelOrder = require("./traverse/LevelOrder");

describe("BinaryTree", () => {
  it("should traverse empty by pre-order", (done) => {
    expect(preOrder()).to.deep.equal([]);
    done();
  });
  it("should traverse by pre-order", (done) => {
    expect(preOrder(binaryTree)).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
    done();
  });
  it("should traverse empty by in-order", (done) => {
    expect(inOrder()).to.deep.equal([]);
    done();
  });
  it("should traverse by in-order", (done) => {
    expect(inOrder(binaryTree)).to.deep.equal([3, 2, 4, 1, 6, 5, 7]);
    done();
  });
  it("should traverse empty by post-order", (done) => {
    expect(postOrder()).to.deep.equal([]);
    done();
  });
  it("should traverse by post-order", (done) => {
    expect(postOrder(binaryTree)).to.deep.equal([3, 4, 2, 6, 7, 5, 1]);
    done();
  });
  it("should traverse empty by level-order", (done) => {
    expect(levelOrder()).to.deep.equal([]);
    done();
  });
  it("should traverse by level-order", (done) => {
    expect(levelOrder(binaryTree)).to.deep.equal([[1], [2, 5], [3, 4, 6, 7]]);
    done();
  });
});
