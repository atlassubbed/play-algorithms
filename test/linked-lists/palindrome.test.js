const { describe, it } = require("mocha");
const { expect } = require("chai");
const { isPalindrome } = require("../../src/index");

const makeList = str => {
  let list = {head: null}, cur;
  for (let i = 0; i < str.length; i++){
    if (cur) cur.next = cur = {data: str[i], next: null};
    else list.head = cur = {data: str[i], next: null};
  }
  return list;
}

describe("palindrome", function(){
  describe("linear solution", function(){
    it("should return true for a unit linked list", function(){
      expect(isPalindrome(makeList("r"))).to.be.true;
    })
    it("should return true for an empty linked list", function(){
      expect(isPalindrome(makeList(""))).to.be.true;
    })
    it("should return true for an odd linked list that is a palindrome", function(){
      expect(isPalindrome(makeList("racecar"))).to.be.true;
    })
    it("should return false for an odd linked list that is not a palindrome", function(){
      expect(isPalindrome(makeList("racekar"))).to.be.false;
    })
    it("should return true for an even linked list that is a palindrome", function(){
      expect(isPalindrome(makeList("hannah"))).to.be.true;
    })
    it("should return false for an even linked list that is not a palindrome", function(){
      expect(isPalindrome(makeList("racecars"))).to.be.false;
    })
  })
})
