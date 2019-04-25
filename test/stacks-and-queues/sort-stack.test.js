const { describe, it } = require("mocha");
const { expect } = require("chai");
const { sortStack } = require("../../src/index");

describe("sort-stack", function(){
  describe("quadratic solution", function(){
    it("should sort a stack so that the smallest items are on the top", function(){
      const makeStack = () => [1,3,2,10,9,4,1,2,5,3,6,11,0,9,10,9,3,1,2];
      const stack = makeStack();
      expect(sortStack(stack)).to.equal(stack);
      expect(stack).to.eql([11,10,10,9,9,9,6,5,4,3,3,3,2,2,2,1,1,1,0]);
      expect(makeStack().length).to.equal(stack.length)
    })
  })
})
