const { expect } = require("chai");
const { binaryTree } = require("./BinaryTree");
const preOrder = require("./traverse/Preorder");
const inOrder = require("./traverse/InOrder");
const postOrder = require("./traverse/PostOrder");
const levelOrder = require("./traverse/LevelOrder");
const maxDepth = require("./MaxDepth");
const isSymmetric = require("./isSymmetric");
const hasPathSum = require("./PathSum");
const inOrderAndPostOrder = require("./build/InOrderAndPostOrder");
const preOrderAndInOrder = require("./build/preOrderAndInOrder");
const connect = require("./Connect");
const serialize = require("./Serialize");
const deserialize = require("./Deserialize");

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
  it("should has path sum equal to 13", (done) => {
    expect(
      hasPathSum(
        {
          val: 1,
          left: {
            val: 2,
            left: {
              val: 3,
              left: {
                val: 7,
              },
            },
            right: {
              val: 4,
            },
          },
          right: {
            val: 5,
            left: {
              val: 6,
            },
            right: {
              val: 7,
            },
          },
        },
        13
      )
    ).to.deep.equal([
      [1, 2, 3, 7],
      [1, 5, 7],
    ]);
    done();
  });
  it("should has path sum equal to -5", (done) => {
    expect(
      hasPathSum(
        {
          val: -2,
          right: {
            val: -3,
          },
        },
        -5
      )
    ).to.deep.equal([[-2, -3]]);
    done();
  });
  describe("Build", () => {
    it("should build btree by in-order and post-order", (done) => {
      expect(
        inOrderAndPostOrder([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])
      ).to.deep.equal({
        val: 3,
        left: {
          val: 9,
          left: null,
          right: null,
        },
        right: {
          val: 20,
          left: {
            val: 15,
            left: null,
            right: null,
          },
          right: {
            val: 7,
            left: null,
            right: null,
          },
        },
      });
      done();
    });
    it("should build btree by pre-order and in-order", (done) => {
      expect(
        preOrderAndInOrder([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
      ).to.deep.equal({
        val: 3,
        left: {
          val: 9,
          left: null,
          right: null,
        },
        right: {
          val: 20,
          left: {
            val: 15,
            left: null,
            right: null,
          },
          right: {
            val: 7,
            left: null,
            right: null,
          },
        },
      });
      done();
    });
  });
  it("should populate next right pointers in each node", (done) => {
    const root = {
      val: 1,
      left: {
        val: 2,
      },
      right: {
        val: 3,
      },
    };
    expect(connect(root)).to.deep.equal({
      val: 1,
      left: {
        val: 2,
        next: {
          val: 3,
          next: null,
        },
      },
      right: {
        val: 3,
        next: null,
      },
      next: null,
    });
    done();
  });
  it("should serialize and deserialize work", (done) => {
    expect(deserialize(serialize(binaryTree))).to.deep.equal(binaryTree);
    done();
  });
});
