const { describe, it } = require("mocha");
const { expect } = require("chai");
const { areRotations } = require("../../src/index");

describe("stirng-compression", function(){
  describe("linear solution", function(){
    it("should return true for strings which are rotations of each other", function(){
      expect(areRotations("waterbottle", "erbottlewat")).to.be.true;
    })
    it("should return false for strings which are not rotations of each other", function(){
      expect(areRotations("waterbottle", "ebottlewat")).to.be.false;
    })
  })
})
