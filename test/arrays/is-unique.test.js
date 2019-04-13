const { describe, it } = require("mocha");
const { expect } = require("chai");
const { isUniqueCharacterSetQuadratic,
  isUniqueCharacterSetLinear,
  isUniqueCharacterSetLinearLog } = require("../../src/index");

describe("is-unique", function(){
  describe("linear solution", function(){
    it("should return false if the character set has duplicates", function(){
      const result = isUniqueCharacterSetLinear("abcdefgxyza");
      expect(result).to.be.false;
    })
    it("should return true if the character set has no duplicates", function(){
      const result = isUniqueCharacterSetLinear("abcdefgxyz");
      expect(result).to.be.true;
    })
  })
  describe("linear-log solution", function(){
    it("should return false if the character set has duplicates", function(){
      const result = isUniqueCharacterSetLinearLog("abcdefgxyza");
      expect(result).to.be.false;
    })
    it("should return true if the character set has no duplicates", function(){
      const result = isUniqueCharacterSetLinearLog("abcdefgxyz");
      expect(result).to.be.true;
    })
  })
  describe("quadratic solution", function(){
    it("should return false if the character set has duplicates", function(){
      const result = isUniqueCharacterSetQuadratic("abcdefgxyza");
      expect(result).to.be.false;
    })
    it("should return true if the character set has no duplicates", function(){
      const result = isUniqueCharacterSetQuadratic("abcdefgxyz");
      expect(result).to.be.true;
    })
  })
})
