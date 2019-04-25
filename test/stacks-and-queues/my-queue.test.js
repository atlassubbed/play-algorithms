const { describe, it } = require("mocha");
const { expect } = require("chai");
const { MyQueue } = require("../../src/index");

describe("my-queue", function(){
  describe("amortized constant solution", function(){
    it("should push many elements, then pop them off in FIFO order", function(){
      const queue = new MyQueue;
      for (let i = 0; i < 10; i++) queue.push(i);
      let els = [];
      while(!queue.isEmpty())
        els.push(queue.pop());
      expect(els).to.eql([0,1,2,3,4,5,6,7,8,9])
    })
    it("should maintain FIFO order when push and pop are interleaved", function(){
      const queue = new MyQueue;
      for (let i = 0; i < 4; i++) queue.push(i);
      let els = [];
      els.push(queue.pop(), queue.pop());
      for (let i = 4; i < 10; i++) queue.push(i);
      while(!queue.isEmpty())
        els.push(queue.pop());
      expect(els).to.eql([0,1,2,3,4,5,6,7,8,9])
    })
  })
})
