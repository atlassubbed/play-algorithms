const { describe, it } = require("mocha");
const { expect } = require("chai");
const { isBalanced } = require("../../src/index");

const node = (id, left=null, right=null) => ({id, left, right});

const makeUnbalanced = () => node(1,
  node(2,
    node(4,
      node(8,
        null,
        node(10,
          null,
          node(11)
        )
      )
    ),
    node(5)
  ),
  node(3,
    node(6),
    node(7,
      null,
      node(9)
    )
  )
)

const makeBalanced = () => node(1,
  node(2,
    node(4,
      node(8)
    ),
    node(5)
  ),
  node(3,
    node(6),
    node(7,
      null,
      node(9)
    )
  )
)
describe("check-balanced", function(){
  describe("linear solution", function(){
    it("should return balanced for a lone root", function(){
      expect(isBalanced(node(0))).to.be.true;
    })
    it("should return balanced for a lone root with a single child", function(){
      expect(isBalanced(node(0, node(1)))).to.be.true;
    })
    it("should return balanced for a lone root with both children", function(){
      expect(isBalanced(node(0, node(1), node(2)))).to.be.true;
    })
    it("should return balanced for a balanced binary tree", function(){
      expect(isBalanced(makeBalanced())).to.be.true;
    })
    it("should return unbalanced for an unbalanced binary tree", function(){
      expect(isBalanced(makeUnbalanced())).to.be.false;
    })
  })
})
