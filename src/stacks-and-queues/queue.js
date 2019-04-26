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
  isEmpty(){
    return !this.head;
  }
  // push to tail
  push(el){
    const node = {el, next: null};
    if (this.tail) this.tail.next = node;
    else this.head = node;
    this.tail = node;
  }
}

module.exports = { Queue };
