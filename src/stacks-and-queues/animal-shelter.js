/** An animal shelter, which holds only dogs and cats, operates on a strictly FIFO basis.
    People must adopt either the"oldest" (based on arrival time) of all animals at the shelter,
    or they can select whether they would prefer a dog or a cat
    (and will receive the oldest animal of that type).
    They cannot select which specific animal they would like.
    Create the data structures to maintain this system and implement operations such as:
    enqueue, dequeueAny, dequeueDog, and dequeueCat. You can use linked lists. */


// there are many ways to solve this
//   we could use three linked lists and a set of "taken" animals:
//     just manage a global queue and 2 specific queues
//     this is not a good way to solve the problem because so much book keeping and memory are required
//   we could use two queues and have an epoch field on each entry; peek/compare to get oldest
//   we could use a single queue, but then we'll have to iterate to find a specific animal type
//     this would take linear time for removals, especially in the case where 
//     a bunch of the same species come in at once
//   in either case, using a linked list as our queue implementation will give us O(1) removal/insert

// linked list
class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  // pop from head
  pop(){
    const head = this.head;
    if (!head) return null;
    if (!(this.head = head.next))
      this.tail = null;
    return head.el
  }
  peek(){
    return this.head && this.head.el;
  }
  // push to tail
  push(el){
    const node = {el, next: null};
    if (this.tail) this.tail.next = node;
    else this.head = node;
    this.tail = node;
  }
}

// chooses which animals are going to be handed out next
class AnimalShelterScheduler {
  constructor(){
    this.animals = [new Queue, new Queue] // two types
    this.epoch = 0;
  }
  // allow for some metadata like the animal's name, birthdate, etc.
  enqueue({type, details}){
    // type 0 is dog, type 1 is cat
    // should assert that type is 0 or 1
    // we can use an epoch field to trade off memory for time
    this.animals[type].push({type, details, epoch: this.epoch++});
  }
  // instead of three methods, dequeue can take an optional type
  dequeue(type){
    let suggestedAnimal = type == null ? this.animals.reduce((p, queue) => {
      const animal = queue.peek();
      if (!animal) return p;
      if (!p) return animal;
      return animal.epoch < p.epoch ? animal : p;
    }, null) : this.animals[type].peek();
    if (!suggestedAnimal) return null;
    suggestedAnimal = this.animals[suggestedAnimal.type].pop();
    return {type: suggestedAnimal.type, details: suggestedAnimal.details};
  }
}

module.exports = { AnimalShelterScheduler };
