const { describe, it } = require("mocha");
const { expect } = require("chai");
const { reverseOrderSum, forwardOrderSum, reverseSumWithoutConverting } = require("../../src/index");

describe("sum-lists", function(){
  describe("linear solution", function(){
    it("should add two reverse-order numbers together", function(){
      const l1 = {head: {data: 6, next: {data: 4, next: {data: 9, next: null}}}}
      const l2 = {head: {data: 1, next: {data: 2, next: {data: 3, next: {data: 4, next: null}}}}}
      const out = {head: {data: 7, next: {data: 6, next: {data: 2, next: {data: 5, next: null}}}}}
      expect(reverseOrderSum(l1, l2)).to.eql(out);
    })
    it("should add two forward-order numbers together", function(){
      const l1 = {head: {data: 6, next: {data: 4, next: {data: 9, next: null}}}}
      const l2 = {head: {data: 1, next: {data: 2, next: {data: 3, next: {data: 4, next: null}}}}}
      const out = {head: {data: 1, next: {data: 8, next: {data: 8, next: {data: 3, next: null}}}}}
      expect(forwardOrderSum(l1, l2)).to.eql(out);
    })
    it("should add two reverse-order numbers together without converting", function(){
      const l1 = {head: {data: 6, next: {data: 6, next: {data: 9, next: null}}}}
      const l2 = {head: {data: 7, next: {data: 2, next: {data: 3, next: {data: 9, next: null}}}}}
      const out = {head: {data: 3, next: {data: 9, next: {data: 2, next: {data: 0, next: {data: 1, next: null}}}}}}
      expect(reverseSumWithoutConverting(l1, l2)).to.eql(out);
    })
  })
})
