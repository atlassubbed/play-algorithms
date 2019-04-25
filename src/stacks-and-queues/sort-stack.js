/** Write a program to sort a stack such that the smallest items are on the top.
    You can use an additional temporary stack, but you may not copy the elements
    into any other data structure (such as an array).
    The stack supports the following operations: push, pop, peek, and isEmpty. */

// of course since javascript, we'll use an array as if it were a stack while adhering to
// the rules above

// the problem does not state whether or not this partition should be stable or account for dupes
// this is something to clarify.

// we can use our solution from before, or could make a MaxTrackingStack

const { MinTrackingStack } = require("./stack-min");

// quadratic, modifies the input stack, uses extra space
// this cheats and uses multiple additionl stacks, we can try and use only one later
// the main idea will be to use the remaining space in the original stack as a buffer
// while we look for the right place to insert the current element into the second stack
const sortStack = stack => {
  let mStack = new MinTrackingStack, smallest = [];
  while(stack.length) mStack.push(stack.pop());
  let numMins = 0, min, curStack;
  while(mStack.stack.length) {
    smallest.push(min = mStack.min());
    curStack = mStack, mStack = new MinTrackingStack;
    while(curStack.stack.length) {
      // reset the mStack such that it contains no elements equal to min
      const el = curStack.pop();
      el === min ? numMins++ : mStack.push(el)
    }
    // push the instances of min to a stack
    while(--numMins)
      smallest.push(min);
  }
  // move smallest items to the top of the stack (reversal)
  while(smallest.length)
    stack.push(smallest.pop());
  return stack;
}

module.exports = { sortStack };
