const { describe, it } = require("mocha");
const { expect } = require("chai");
const { getSuccessor } = require("../../src/index");

const nodes = [];

const node = (value, left=null, right=null) => {
  const node = {parent: null, value, left, right};
  nodes.push(node);
  if (node.left) node.left.parent = node;
  if (node.right) node.right.parent = node;
  return node;
}

const BST = node(5,
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

nodes.sort((n1, n2) => n1.value - n2.value);

describe("successor", function(){
  describe("linear solution", function(){
    it("should return the correct succesor for every node in a BST", function(){
      nodes.forEach((n, i)  => {
        const successor = getSuccessor(n);
        const expectedSuccessor = nodes[i+1] || null;
        expect(successor).to.equal(expectedSuccessor)
      })
    })
  })
})
