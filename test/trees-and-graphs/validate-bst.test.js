const { describe, it } = require("mocha");
const { expect } = require("chai");
const { isBSTNoDupes, isBSTDupes } = require("../../src/index");

const node = (value, left=null, right=null) => ({value, left, right});

const makeBST = () => node(5,
  node(3,
    node(1,
      node(0)
    ),
    node(4)
  ),
  node(10,
    node(9,
      node(7,
        null,
        node(8)
      )
    ),
    node(20)
  )
)

const makeNonBST = () => node(5,
  node(3,
    node(1,
      node(0)
    ),
    node(4)
  ),
  node(10,
    node(6,
      node(7,
        null,
        node(8)
      )
    ),
    node(20)
  )
)

// assume all dupes on left
const makeNonBSTDupes = () => node(12,
  node(10,
    node(9),
    node(11,
      node(10)
    )
  ),
  node(20,
    node(13,
      null,
      node(13)
    )
  )
)
const makeBSTDupes = () => node(12,
  node(10,
    node(9,
      null,
      node(10)
    ),
    node(11)
  ),
  node(20,
    node(13,
      node(13)
    )
  )
)

describe("validate-bst", function(){
  describe("isBSTNoDupes", function(){
    describe("linear solution", function(){
      it("should return true for a binary tree that satisfies the BST properties", function(){
        expect(isBSTNoDupes(makeBST())).to.be.true;
      })
      it("should return false for a binary tree that does not satisfy the BST properties", function(){
        expect(isBSTNoDupes(makeNonBST())).to.be.false;
      })
      it("should return true for a binary search tree that has dupes with incorrect placement", function(){
        expect(isBSTNoDupes(makeNonBSTDupes())).to.be.true;
      })
    })
  })
  describe("isBSTDupes", function(){
    describe("linear solution", function(){
      it("should return true for a binary tree that satisfies the BST properties", function(){
        expect(isBSTDupes(makeBST())).to.be.true;
      })
      it("should return false for a binary tree that does not satisfy the BST properties", function(){
        expect(isBSTDupes(makeNonBST())).to.be.false;
      })
      it("should return false for a binary tree that has dupes with incorrect placement", function(){
        expect(isBSTDupes(makeNonBSTDupes())).to.be.false;
      })
      it("should return true for a binary search tree that has dupes", function(){
        expect(isBSTDupes(makeBSTDupes())).to.be.true;
      })
    })
  })
})
