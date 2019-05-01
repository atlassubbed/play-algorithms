const { describe, it } = require("mocha");
const { expect } = require("chai");
const { lowestCommonAncestor } = require("../../src/index");

const index = {};

const node = (id, left=null, right=null) => index[id] = {id, left, right};

const makeBinaryTree = () => node(5,
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

describe("first-common-ancestor", function(){
  describe("linear solution", function(){
    it("should return the lowest common ancestor", function(){
      expect(lowestCommonAncestor(makeBinaryTree(), index[8], index[20])).to.equal(index[10]);
    })
    it("should return the lowest common ancestor if it's the root", function(){
      expect(lowestCommonAncestor(makeBinaryTree(), index[0], index[7])).to.equal(index[5]);
    })
    it("should return false if one of the nodes isn't in the tree", function(){
      expect(lowestCommonAncestor(makeBinaryTree(), index[0], index[70])).to.be.false;
    })
  })
})
