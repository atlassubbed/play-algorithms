const { describe, it } = require("mocha");
const { expect } = require("chai");
const { isPalPerm } = require("../../src/index");


describe("palindrome-permutation", function(){
  describe("linear solution", function(){
    it("should return true for odd palindrome permutations", function(){
      // race car
      expect(isPalPerm("rcce raa")).to.be.true
    });
    it("should return true for even palindrome permutations", function(){
      // hannah
      expect(isPalPerm("nanahh")).to.be.true;
    });
    it("should otherwise return false for odd strings", function(){
      // bananas
      expect(isPalPerm("nnaaasb")).to.be.false;
    })
    it("should otherwise return false for odd strings", function(){
      // race cars
      expect(isPalPerm("rcces raa")).to.be.false;
    })
  })
})
