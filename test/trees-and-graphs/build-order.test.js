const { describe, it } = require("mocha");
const { expect } = require("chai");
const { topologicalSortDirty, topologicalSortClean } = require("../../src/index");

// this example presents the diamond problem
const makeProjects = () => ["a", "b", "c", "d", "e", "f"];
const makeEdges = () => [["a", "d"], ["f", "b"], ["b", "d"], ["f", "a"], ["d", "c"]];
const makeProblemEdges = () => [...makeEdges(), ["c", "f"]];

describe("build-order", function(){
  describe("topologicalSortDirty", function(){
    describe("linear solution", function(){
      it("should throw errors on cycles", function(){
        const job = () => topologicalSortDirty(makeProjects(), makeProblemEdges());
        expect(job).to.throw("cyclic");
      })
      it("should return a correct topological sort order of the projects", function(){
        const job = () => topologicalSortDirty(makeProjects(), makeEdges());
        expect(job()).to.eql(["e", "f", "a", "b", "d", "c"])
      })
    })
  })
  describe("topologicalSortClean", function(){
    describe("linear solution", function(){
      it("should throw errors on cycles", function(){
        const job = () => topologicalSortClean(makeProjects(), makeProblemEdges());
        expect(job).to.throw("cyclic");
      })
      it("should return a correct topological sort order of the projects", function(){
        const job = () => topologicalSortClean(makeProjects(), makeEdges());
        expect(job()).to.eql(["e", "f", "a", "b", "d", "c"])
      })
    })
  })
})
