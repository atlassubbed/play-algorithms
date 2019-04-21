const { describe, it } = require("mocha");
const { expect } = require("chai");
const { compressString } = require("../../src/index");

describe("stirng-compression", function(){
  describe("linear solution", function(){
    it("should not compress an empty string", function(){
      expect(compressString("")).to.equal("");
    })
    it("should not compress a length 1 string", function(){
      expect(compressString("a")).to.equal("a");
    })
    it("should not compress a length 2 string", function(){
      expect(compressString("aa")).to.equal("aa");
    })
    it("should not compress a string that would not be compressed well", function(){
      expect(compressString("abcdefg")).to.equal("abcdefg");
    })
    it("should properly compress a reundant string", function(){
      expect(compressString("aabbcccccccccdefggggg")).to.equal("a2b2c9d1e1f1g5");
    })
  })
})
