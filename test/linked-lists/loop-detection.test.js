const { describe, it } = require("mocha");
const { expect } = require("chai");
const { getCycleStart } = require("../../src/index");

const getLast = (l, cur=l.head) => {
  while(cur.next) cur = cur.next;
  return cur;
}
describe("loop-detection", function(){
  describe("linear solution", function(){
    it("should return null if there are no cycles", function(){
      const list = {head: {next: {next: {next: {next: null}}}}}
      expect(getCycleStart(list)).to.be.null;
    })
    // note that it doesn't make sense for the "problem-prevSib" of the cycle start node
    // (the node with non-unit in-degree) to be any node other than the last node
    it("should return the starting cycle node if there is a cycle", function(){
      const list = {head: {next: {next: {next: {next: {next: null}}}}}}
      const last = getLast(list);
      last.next = list.head.next.next;
      expect(getCycleStart(list)).to.equal(list.head.next.next);
    })
  })
})
