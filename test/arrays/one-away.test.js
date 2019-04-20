const { describe, it } = require("mocha");
const { expect } = require("chai");
const { isOneEditAway } = require("../../src/index");

describe("one-away", function(){
  describe("linear solution", function(){
    it("should return false for a test string that is more than one unit longer than the input string", function(){
      const str1 = "eigenvect", str2 = "eigenvector";
      expect(isOneEditAway(str1, str2)).to.be.false;
    })
    it("should return false for an input string that is more than one unit longer than the test string", function(){
      const str1 = "eigenvector", str2 = "eigenvect";
      expect(isOneEditAway(str1, str2)).to.be.false;
    })
    describe("equal length strings", function(){
      it("should return true for strings that are equal", function(){
        const str1 = "eigenvector", str2 = "eigenvector";
        expect(isOneEditAway(str1, str2)).to.be.true;
      })
      it("should return true for strings that are one replacement away", function(){
        const str1 = "eigenvector", str2 = "eigemvector";
        expect(isOneEditAway(str1, str2)).to.be.true;
      })
      it("should return false for strings that are multiple replacements away", function(){
        const str1 = "eigenvector", str2 = "eigemvektor";
        expect(isOneEditAway(str1, str2)).to.be.false;
      })
    })
    describe("input string one unit longer than test string", function(){
      it("should return true if the test string is one addition away", function(){
        const str1 = "eigenvector", str2 = "eigevector";
        expect(isOneEditAway(str1, str2)).to.be.true;
      })
      it("should return false if the test string is more than one edit away", function(){
        const str1 = "eigenvector", str2 = "eigevektor";
        expect(isOneEditAway(str1, str2)).to.be.false;
      })
    })
    describe("test string one unit longer than the input string", function(){
      it("should return true if the test string is one removal away", function(){
        const str1 = "eigenvector", str2 = "eigennvector";
        expect(isOneEditAway(str1, str2)).to.be.true;
      })
      it("should return false if the test string is more than one edit away", function(){
        const str1 = "eigenvector", str2 = "eigennvektor";
        expect(isOneEditAway(str1, str2)).to.be.false;
      })
    })
  })
})
