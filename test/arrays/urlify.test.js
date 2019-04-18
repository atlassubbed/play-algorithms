const { describe, it } = require("mocha");
const { expect } = require("chai");
const { escapeSpaces } = require("../../src/index");

describe("urlify", function(){
  describe("linear solution", function(){
    it("should should properly escape all spaces", function(){
      const input = "hello world  how are   you".split("");
      const trueLength = input.length;
      const expectedOuput = "hello%20world%20%20how%20are%20%20%20you".split("");
      const result = escapeSpaces(input, trueLength);
      expect(input).to.eql(expectedOuput);
    })
  })
})
