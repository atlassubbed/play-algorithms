const { describe, it } = require("mocha");
const { expect } = require("chai");
const { crossZero } = require("../../src/index");

const matrix = () => [
  [1, 2, 3,  4],
  [5, 0, 7,  8],
  [9, 10,11,12],
  [13,14,0,16],
  [17,18,19,20],
  [21,22,23,24]
]

const zeroedMatrix = () => [
  [1, 0, 0, 4],
  [0, 0, 0, 0],
  [9, 0, 0,12],
  [0, 0, 0, 0],
  [17,0, 0,20],
  [21,0, 0,24]
]

describe("zero-matrix", function(){
  describe("linear solution", function(){
    it("should zero all of the matrix's rows and columons that contain a zero", function(){
      expect(crossZero(matrix())).to.eql(zeroedMatrix())
    })
  })
})
