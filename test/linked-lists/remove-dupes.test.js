const { describe, it } = require("mocha");
const { expect } = require("chai");
const { dedupeList, dedupeListSlow } = require("../../src/index");


describe("remove-dupes", function(){
  describe("linear solution", function(){
    it("should not modify the list if it is empty", function(){
      const list = {head: null}
      const modifiedList = dedupeList(list);
      expect(modifiedList).to.equal(list);
      expect(modifiedList).to.eql({head: null})
    });
    it("should not modify the list if it has no dupes", function(){
      const makeList = () => ({head: {data: 1, next: {data: 7, next: {data: 4, next: null}}}})
      const list = makeList()
      const modifiedList = dedupeList(list);
      expect(modifiedList).to.equal(list);
      expect(modifiedList).to.eql(makeList())
    })
    it("should remove dupes in the list", function(){
      const list = {
        head: {
          data: 1, next: {data: 7, next: {data: 4, next: {data: 1, next: {data: 4, next: null}}}}
        }
      }
      const modifiedList = dedupeList(list);
      expect(modifiedList).to.equal(list);
      expect(modifiedList).to.eql(({head: {data: 1, next: {data: 7, next: {data: 4, next: null}}}}));
    })
  })
  // but we're ok with duping tests right now
  describe("quadratic solution (constant extra space)", function(){
    it("should not modify the list if it is empty", function(){
      const list = {head: null}
      const modifiedList = dedupeListSlow(list);
      expect(modifiedList).to.equal(list);
      expect(modifiedList).to.eql({head: null})
    });
    it("should not modify the list if it has no dupes", function(){
      const makeList = () => ({head: {data: 1, next: {data: 7, next: {data: 4, next: null}}}})
      const list = makeList()
      const modifiedList = dedupeListSlow(list);
      expect(modifiedList).to.equal(list);
      expect(modifiedList).to.eql(makeList())
    })
    it("should remove dupes in the list", function(){
      const list = {
        head: {
          data: 1, next: {data: 7, next: {data: 4, next: {data: 1, next: {data: 4, next: null}}}}
        }
      }
      const modifiedList = dedupeListSlow(list);
      expect(modifiedList).to.equal(list);
      expect(modifiedList).to.eql(({head: {data: 1, next: {data: 7, next: {data: 4, next: null}}}}));
    })
  })
})
