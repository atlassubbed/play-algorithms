/** How would you design a stack which, in addition to push and pop,
    has a function min which returns the minimum element?
    Push, pop and min should all operate in 0(1) time. */


class MinTrackingStack {
  constructor(){
    this.stack = [];
    this.minStack = [];
  }
  _peekNode(){
    const { stack } = this;
    if (stack.length)
      return stack[stack.length-1];
  }
  peek(){
    const top = this._peekNode();
    return top && top.el;
  }
  push(el){
    // since we can't remove items underneath this element,
    // its min will be accurate when peeked
    const prev = this._peekNode();
    // then we just update the new min
    const node = {el, min: prev ? Math.min(prev.min, el) : el}
    return this.stack.push(node);
  }
  pop(){
    return this.stack.pop().el;
  }
  min(){
    return this._peekNode().min
  }
}

module.exports = { MinTrackingStack }
