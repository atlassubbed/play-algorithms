/** Implement a MyQueue class which implements a queue using two stacks. */

// i mean, we could use stack reversal w/ an auxiliary stack and keep track of a parity flag
// but why would we want to do this instead of using a linked list?
// because arrays are more compact

// actually, we don't need a flag, we can just use two stacks and look at length
class MyQueue {
  constructor(){
    this.queue = []; // this is actually a reversed stack
    this.pendingReversal = [];
  }
  push(el){
    this.pendingReversal.push(el);
  }
  isEmpty(){
    // demorgan
    return !(this.queue.length || this.pendingReversal.length)
  }
  pop(){
    const { queue, pendingReversal } = this;
    // we've got reversed items to pop
    if (queue.length) return queue.pop();
    // there's nothing to pop
    if (!pendingReversal.length) return null;
    // fill up the reversed stack (queue)
    while(pendingReversal.length)
      queue.push(pendingReversal.pop());
    return this.pop(); // "try-again"-style recursion will terminate next cycle
  }
}

module.exports = { MyQueue };
