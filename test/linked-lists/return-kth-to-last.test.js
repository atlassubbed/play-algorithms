const { describe, it } = require("mocha");
const { expect } = require("chai");
const { getFromLast } = require("../../src/index");

const makeList = () => (
  {head: {data: 1, next: {data: 2, next: {data: 3, next: {data: 4, next: {data:5, next: null}}}}}}
)
describe("return-kth-to-last", function(){
  describe("linear solution", function(){
    it("should return null for negative k", function(){
      const list = makeList();
      expect(getFromLast(list, -1)).to.be.null;
    })
    it("should return null for non-integer k", function(){
      const list = makeList();
      expect(getFromLast(list, 1.2)).to.be.null;
    })
    it("should return null if the list doesn't have at least k + 1 nodes", function(){
      const list = makeList();
      expect(getFromLast(list, 5)).to.be.null;
    })
    it("should return the first node if the list has exactly k + 1 nodes", function(){
      const list = makeList();
      const node = getFromLast(list, 4);
      expect(node).to.equal(list.head);
      expect(node.data).to.equal(1);
    })
    it("should return the first from last node, which is not the last node", function(){
      const list = makeList();
      const node = getFromLast(list, 1);
      expect(node).to.equal(list.head.next.next.next);
      expect(node.data).to.equal(4);
    })
    it("should return the last node, which is the 0th from last node", function(){
      const list = makeList();
      const node = getFromLast(list, 0);
      expect(node).to.equal(list.head.next.next.next.next);
      expect(node.data).to.equal(5);
    })
    it("should return the kth to last node", function(){
      const list = makeList();
      const node = getFromLast(list, 3);
      expect(node).to.equal(list.head.next);
      expect(node.data).to.equal(2)
    })
  })
})
