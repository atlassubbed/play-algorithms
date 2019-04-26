const { describe, it } = require("mocha");
const { expect } = require("chai");
const { hasRouteBetween } = require("../../src/index");

const n = (...neighbors) => ({neighbors})
const makeGraph = hasRoute => {
  const n1 = n(n(), n(n(), n(), n()), n(n(), n(), n()), n(), n());
  const n2 = n(n(n(n())),n(n(),n()),n(),n(n(n(), n())));
  if (hasRoute) n2.neighbors[0].neighbors[0].neighbors[0] = n1;
  return [n1, n2];
}

describe("route-between-nodes", function(){
  describe("linear solution", function(){
    it("should return true if there's a route from n1 to n2", function(){
      const [n2, n1] = makeGraph(true);
      expect(hasRouteBetween(n1, n2)).to.be.true;
    })
    it("should return true if there's a route from n2 to n1", function(){
      const [n1, n2] = makeGraph(true);
      expect(hasRouteBetween(n1, n2)).to.be.true;
    })
    it("should return false if there's no route between n1 and n2", function(){
      const [n1, n2] = makeGraph();
      expect(hasRouteBetween(n1, n2)).to.be.false;
    })
  })
})
