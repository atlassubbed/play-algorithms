const { describe, it } = require("mocha");
const { expect } = require("chai");
const { MinTrackingStack } = require("../../src/index");

describe("stack-min", function(){
  describe("constant solution", function(){
    it("should peek the last added node", function(){
      const stack = new MinTrackingStack();
      stack.push(1), stack.push(2), stack.push(3);
      expect(stack.peek()).to.equal(3)
    })
    it("should pop the last added node", function(){
      const stack = new MinTrackingStack();
      stack.push(1), stack.push(2), stack.push(3);
      expect(stack.pop()).to.equal(3);
      expect(stack.peek()).to.equal(2);
    })
    it("should return the current min element", function(){
      const stack = new MinTrackingStack();
      stack.push(1), stack.push(2), stack.push(3), stack.push(.9);
      expect(stack.min()).to.equal(.9);
    })
    it("should return an updated min element", function(){
      const stack = new MinTrackingStack();
      stack.push(1), stack.push(2), stack.push(3), stack.push(.9);
      expect(stack.min()).to.equal(.9);
      stack.pop();
      expect(stack.min()).to.equal(1);
    })
  })
})
