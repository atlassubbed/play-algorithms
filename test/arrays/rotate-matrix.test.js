const { describe, it } = require("mocha");
const { expect } = require("chai");
const { rotateBy90 } = require("../../src/index");

const even = () => [
  [1, 2, 3,  4],
  [5, 6, 7,  8],
  [9, 10,11,12],
  [13,14,15,16]
]
const evenRotated = () => [
  [4,8,12, 16],
  [3,7,11, 15],
  [2,6,10, 14],
  [1,5, 9, 13]
]
const odd = () => [
  [1, 2, 3, 4,  5],
  [6, 7, 8, 9, 10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
]
const oddRotated = () => [
  [5,10,15,20,25],
  [4,9,14,19, 24],
  [3,8,13,18, 23],
  [2,7,12,17, 22],
  [1,6,11,16, 21]
]

describe("rotate-matrix", function(){
  describe("quadratic solution", function(){
    it("should rotate an even image to the left by pi/2", function(){
      expect(rotateBy90(even())).to.eql(evenRotated());
    })
    it("should rotate an odd image to the left by pi/2", function(){
      expect(rotateBy90(odd())).to.eql(oddRotated());
    })
    it("should result in the identity after 4 rotations on an even image", function(){
      expect(rotateBy90(rotateBy90(rotateBy90(rotateBy90(even()))))).to.eql(even())
    })
    it("should result in the identity after 4 rotations on an odd image", function(){
      expect(rotateBy90(rotateBy90(rotateBy90(rotateBy90(odd()))))).to.eql(odd())
    })
  })
})
