const { describe, it } = require("mocha");
const { expect } = require("chai");
const { arePermuations } = require("../../src/index");

const samples =  ["abc", "acb", "bac", "bca", "cab", "cba"];

describe("check-permuations", function(){
  describe("linear solution", function(){
    // it doesn't have to if the caller is not expecting this behavior
    it("should return true for empty strings", function(){
      expect(arePermuations("", "")).to.be.true;
    });
    // brute force check for N = 3
    it("should return true for permutations and equivalent strings", function(){
      for (let i = 0; i < samples.length; i++){
        const perm1 = samples[i];
        for (let j = i; j < samples.length; j++){
          const perm2 = samples[j];
          expect(arePermuations(perm1, perm2)).to.be.true;
        }
      }
    })
    it("should return false for equal length strings that aren't permuations", function(){
      expect(arePermuations("abc", "abb")).to.be.false;
    })
    it("should return false for non-equal length strings", function(){
      expect(arePermuations("abc", "ab")).to.be.false;
    })
  })
})
