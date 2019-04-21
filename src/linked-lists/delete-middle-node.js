/** Implement an algorithm to delete a node in the middle
    (i.e., any node but the  rst and last node, not necessarily the exact middle)
    of a singly linked list, given only access to that node.
    EXAMPLE
      input:the node c from the linked lista->b->c->d->e->f
      result: nothing is returned, but the new linked list looks likea->b->d->e- >f */

// we only have a ref to the middle node. it would be nice if this was doubly-linked
// because then removing a node would be trivial.

// just copy the data and remove the next node
const deleteMiddleNode = node => {
  if (!node) return false;
  const { next } = node;
  if (!next) return false;
  node.data = next.data;
  node.next = next.next;
  next.next = null;
  return true;
}


module.exports = { deleteMiddleNode }
