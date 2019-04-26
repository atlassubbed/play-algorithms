const { describe, it } = require("mocha");
const { expect } = require("chai");
const { makeBinarySearchTree } = require("../../src/index");

describe("minimal-tree", function(){
  describe("linear solution", function(){
    it("should return null for an empty array", function(){
      expect(makeBinarySearchTree([])).to.equal(null);
    })
    it("should return the correct binary tree for a unit-array", function(){
      expect(makeBinarySearchTree([6])).to.eql({value: 6, left: null, right: null});
    })
    it("should return the correct binary tree for an N-array", function(){
      expect(makeBinarySearchTree([1,2,3,4,5,6,7,8,9])).to.eql({
        value: 5,
        left: {
          value: 3,
          left: {
            value: 2,
            left: {
              value: 1,
              left: null,
              right: null
            },
            right: null
          },
          right: {
            value: 4,
            left: null,
            right: null
          }
        },
        right: {
          value: 8,
          left: {
            value: 7,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null,
          },
          right: {
            value: 9,
            left: null,
            right: null
          }
        }
      });
    })
  })
})
