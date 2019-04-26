const { describe, it } = require("mocha");
const { expect } = require("chai");
const { indexNodesAtDepth, indexNodesAtDepthBFS } = require("../../src/index");

// example input
//        1
//      /   \
//     2     3
//    / \   / \
//   4   5 6   7
//  /           \
// 8             9
//  \
//   10
//     \
//      11

// example output
// [
//   1,
//   2 -> 3,
//   4 -> 5 -> 6 -> 7
//   8 -> 9,
//   10,
//   11
// ]

// we will memoize calls to node
const nodeCache = {};
const node = (id, left=null, right=null) => (nodeCache[id] = nodeCache[id] || {id, left, right});

// declarative JSX is something we could use here.
// `h` (also known as `React.createElement`) is essentially `node`
// the extra transpilation step is probably not worth it in this case
const makeTree = () => node(1,
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

const makeList = (...ids) => {
  let head = {}, cur = head;
  for (let id of ids)
    cur = cur.next = {node: nodeCache[id], next: null}
  return head;
}

// memoization allows us to just get the nodes we created by reference
const makeDepths = () => [
  makeList(1),
  makeList(2,3),
  makeList(4,5,6,7),
  makeList(8,9),
  makeList(10),
  makeList(11)
]

describe("list-of-depths", function(){
  describe("linear solution", function(){
    it("should properly fill in the depths structure", function(){
      expect(indexNodesAtDepth(makeTree())).to.eql(makeDepths())
    })
    it("should properly fill in the depths structure with BFS", function(){
      expect(indexNodesAtDepthBFS(makeTree())).to.eql(makeDepths())
    })
  })
})
