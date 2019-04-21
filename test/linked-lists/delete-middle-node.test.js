const { describe, it } = require("mocha");
const { expect } = require("chai");
const { deleteMiddleNode } = require("../../src/index");

const makeList = () => (
  {head: {data: 1, next: {data: 2, next: {data: 3, next: {data: 4, next: {data:5, next: null}}}}}}
)

describe("delete-middle-node", function(){
  describe("linear solution", function(){
    it("should not remove an unspecified node", function(){
      const list = makeList();
      expect(deleteMiddleNode()).to.be.false;
      expect(list).to.eql(makeList())
    })
    it("should remove the first node", function(){
      const list = makeList();
      expect(deleteMiddleNode(list.head)).to.be.true;
      expect(list).to.eql({head: {data: 2, next: {data: 3, next: {data: 4, next: {data:5, next: null}}}}})
    })
    it("should remove a middle node", function(){
      const list = makeList();
      expect(deleteMiddleNode(list.head.next.next)).to.be.true;
      expect(list).to.eql({head: {data: 1, next: {data: 2, next: {data: 4, next: {data:5, next: null}}}}})
    })
  })
})
