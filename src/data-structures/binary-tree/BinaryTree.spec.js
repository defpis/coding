const { expect } = require("chai");
const { binaryTree } = require("./BinaryTree");
const preOrder = require("./traverse/Preorder");
const inOrder = require("./traverse/InOrder");
const postOrder = require("./traverse/PostOrder");
const levelOrder = require("./traverse/LevelOrder");
const maxDepth = require("./MaxDepth");
const isSymmetric = require("./isSymmetric");

describe("BinaryTree", () => {
  describe("Traverse", () => {
    it("should traverse by pre-order", (done) => {
      expect(preOrder(binaryTree)).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
      done();
    });
    it("should traverse by in-order", (done) => {
      expect(inOrder(binaryTree)).to.deep.equal([3, 2, 4, 1, 6, 5, 7]);
      done();
    });
    it("should traverse by post-order", (done) => {
      expect(postOrder(binaryTree)).to.deep.equal([3, 4, 2, 6, 7, 5, 1]);
      done();
    });
    it("should traverse by level-order", (done) => {
      expect(levelOrder(binaryTree)).to.deep.equal([[1], [2, 5], [3, 4, 6, 7]]);
      done();
    });
  });
  it("should return max depth", (done) => {
    expect(maxDepth(binaryTree)).to.equal(3);
    done();
  });
  it("should check tree is symmetric or not", (done) => {
    /*
           1
        2     2
      2     2
    */
    expect(
      isSymmetric({
        val: 1,
        left: {
          val: 2,
          left: {
            val: 2,
          },
        },
        right: {
          val: 2,
          left: {
            val: 2,
          },
        },
      })
    ).to.equal(false);
    done();
  });
});
