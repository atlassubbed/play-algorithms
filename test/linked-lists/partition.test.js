const { describe, it } = require("mocha");
const { expect } = require("chai");
const { partitionAround } = require("../../src/index");

const makeList = () => ({
  head: {
    data: 5,
    next: {
      data: 3,
      next: {
        data: 2,
        next: {
          data: 8,
          next: {
            data:9,
            next: {
              data: 10,
              next: {
                data: 1,
                next: null
              }
            }
          }
        }
      }
    }
  }
})

describe("partition", function(){
  describe("linear solution", function(){
    it("should partition if the first element is in the left partition", function(){
      const list = makeList();
      const partitioned = partitionAround(list, 6);
      expect(partitioned).to.equal(list);
      expect(partitioned).to.eql({
        head: {
          data: 1,
          next: {
            data: 2,
            next: {
              data: 3,
              next: {
                data: 5,
                next: {
                  data: 8,
                  next: {
                    data: 9,
                    next: {
                      data: 10,
                      next: null
                    }
                  }
                }
              }
            }
          }
        }
      })
    })
    it("should partition if the first element is in the right partition", function(){
      const list = makeList();
      const partitioned = partitionAround(list, 5);
      expect(partitioned).to.equal(list);
      expect(partitioned).to.eql({
        head: {
          data: 1,
          next: {
            data: 2,
            next: {
              data: 3,
              next: {
                data: 5,
                next: {
                  data: 8,
                  next: {
                    data: 9,
                    next: {
                      data: 10,
                      next: null
                    }
                  }
                }
              }
            }
          }
        }
      })
    })
  })
})
