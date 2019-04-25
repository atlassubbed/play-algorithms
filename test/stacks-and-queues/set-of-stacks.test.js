const { describe, it } = require("mocha");
const { expect } = require("chai");
const { SetOfStacks } = require("../../src/index");

describe("set-of-stacks", function(){
  describe("constant solution", function(){
    it("should push elements without violating the threshold", function(){
      const stack = new SetOfStacks(5);
      for (let i = 0; i < 20; i++) stack.push(i);
      expect(stack.set).to.eql([
        [0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19]
      ])
    })
    it("should pop elements properly", function(){
      const stack = new SetOfStacks(5);
      let els = [];
      for (let i = 0; i < 20; i++) stack.push(i);
      for (let i = 0; i < 20; i++) els.push(stack.pop());
      expect(stack.set).to.eql([]);
      expect(els).to.eql([19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0])
    })
    it("should not destroy the initial set state if popping from an empty stack", function(){
      const stack = new SetOfStacks(5);
      expect(stack.set).to.eql([[]]);
      stack.pop();
      expect(stack.set).to.eql([[]])
    })
  })
})
