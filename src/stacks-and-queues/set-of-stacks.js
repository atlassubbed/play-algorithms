/** Imagine a (literal) stack of plates. If the stack gets too high, it might topple. 
    We would likely start a new stack when the previous stack exceeds some threshold. 
    Implement a data structure, SetOfStacks that creates a new stack when the previous
    stack reaches capacity. push() and pop() should behave identically to a single stack.
    BONUS: implement popAtIndex() */

class SetOfStacks {
  constructor(threshold){
    // should do error checking in case it is not a positive integer
    this.threshold = threshold;
    this.set = [[]];
  }
  _getCapacity(stack){
    return (stack || this._getStack()).length;
  }
  _getStack(i=this.set.length-1){
    // should do error checking here
    return this.set[i];
  }
  push(el){
    const curStack = this._getStack();
    if (this._getCapacity(curStack) === this.threshold) this.set.push([el]);
    else curStack.push(el);
  }
  pop(){
    // note that if we allow popping at an index without rebalancing the stacks
    // then we'll have to do something like while(!curStack.length) this.set.pop();
    // to clean up any stale stacks that have already been emptied w/ popAtIndex
    // there are many ways to handle this. We could splice out the stale stack in popAtIndex instead
    const curStack = this._getStack();
    // don't undo the initial state
    if (!curStack.length && this.set.length === 1) return;
    const el = curStack.pop();
    // clean up empty stack in case we pop again before pushing
    curStack.length || this.set.pop();
    return el;
  }
  popAtIndex(i){
    // should do error checking in case it is not an integer
    // the behavior of this method should be clarified.
    // should we "shift" the subsequent stacks so that the stack we just
    // popped at will fill up?
    // Or, should we let this stack shrink?
    // I think we can implement this "rebalancing" functionality in O(K) time
    // if we use a linked list to keep track of sets of linked list stacks
    // and a head/tail pointer for each substack:

    // s1 -> s2 -> s3 -> s4 (K list size 4)
    // |     |
    // a1    a2  ...
    // |     |
    // b1    b2  ...
    // (threshold = 3)
    // when popping off s2, for example, we rewire a2, a3, a4 to be leader nodes in the K list

    // not rebalancing this shouldn't be a problem since we'll still maintain the correct ordering
    // and will not violate the threshold policy:

  }
}

module.exports = { SetOfStacks };

