const { describe, it } = require("mocha");
const { expect } = require("chai");
const { AnimalShelterScheduler } = require("../../src/index");

const makeSituation = () => {
  const scheduler = new AnimalShelterScheduler;
  scheduler.enqueue({type: 0, details: "meow 1"})
  scheduler.enqueue({type: 1, details: "woof 1"})
  scheduler.enqueue({type: 1, details: "woof 2"})
  scheduler.enqueue({type: 0, details: "meow 2"})
  scheduler.enqueue({type: 1, details: "woof 3"})
  scheduler.enqueue({type: 0, details: "meow 3"})
  return scheduler;
}
describe("animal-shelter", function(){
  describe("constant solution, uses linear extra space", function(){
    it("should properly dequeue the oldest cats first", function(){
      const scheduler = makeSituation();
      let cats = [], cat;
      while(cat = scheduler.dequeue(0))
        cats.push(cat);
      expect(cats).to.eql([
        {type: 0, details: "meow 1"},
        {type: 0, details: "meow 2"},
        {type: 0, details: "meow 3"}
      ])
    })
    it("should properly dequeue the oldest dogs first", function(){
      const scheduler = makeSituation();
      let dogs = [], dog;
      while(dog = scheduler.dequeue(1))
        dogs.push(dog);
      expect(dogs).to.eql([
        {type: 1, details: "woof 1"},
        {type: 1, details: "woof 2"},
        {type: 1, details: "woof 3"}
      ])
    })
    it("should properly dequeue the oldest unspecified animals first", function(){
      const scheduler = makeSituation();
      let animals = [], animal;
      while(animal = scheduler.dequeue())
        animals.push(animal);
      expect(animals).to.eql([
        {type: 0, details: "meow 1"},
        {type: 1, details: "woof 1"},
        {type: 1, details: "woof 2"},
        {type: 0, details: "meow 2"},
        {type: 1, details: "woof 3"},
        {type: 0, details: "meow 3"}
      ])
    })
  })
})
