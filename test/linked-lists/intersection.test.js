const { describe, it } = require("mocha");
const { expect } = require("chai");
const { doesIntersect, findIntersection } = require("../../src/index");


describe("intersection", function(){
  describe("linear solution", function(){
    describe("doesIntersect", function(){
      it("should return false if one of the lists are empty", function(){
        const l1 = {head: null};
        const l2 = {head: {next: {next: null}}};
        expect(doesIntersect(l1, l2)).to.be.false;
        expect(doesIntersect(l2, l1)).to.be.false;
      })
      it("should return false for lists that aren't merged at some point", function(){
        const l1 = {head: {next: {next: {next: {next: {next: null}}}}}}
        const l2 = {head: {next: {next: {next: null}}}}
        expect(doesIntersect(l1, l2)).to.be.false;
      })
      it("should return true for lists that are merged at some point", function(){
        const l1 = {head: {next: {next: {next: {next: {next: {next: null}}}}}}}
        const l2 = {head: {next: {next: null}}}
        l2.head.next.next = l1.head.next.next.next;
        expect(doesIntersect(l1, l2)).to.be.true;
      })
    })
    describe("findIntersection", function(){
      it("should return null if one of the lists are empty", function(){
        const l1 = {head: null};
        const l2 = {head: {next: {next: null}}};
        expect(findIntersection(l1, l2)).to.be.null;
        expect(findIntersection(l2, l1)).to.be.null;
      })
      it("should return null for lists that aren't merged at some point", function(){
        const l1 = {head: {next: {next: {next: {next: {next: null}}}}}}
        const l2 = {head: {next: {next: {next: null}}}}
        expect(findIntersection(l1, l2)).to.be.null;
      })
      it("should return the intersection node for lists that are merged at that node", function(){
        const l1 = {head: {next: {next: {next: {next: {next: {next: null}}}}}}}
        const l2 = {head: {next: {next: null}}}
        l2.head.next.next = l1.head.next.next.next;
        expect(findIntersection(l1, l2)).to.equal(l2.head.next.next)
      })
    })
  })
})
