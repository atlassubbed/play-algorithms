/** Write code to partition a linked list around a value x,
    such that all nodes less than x come before all nodes greater than or equal to x.
    If x is contained within the list, the values of x only need
    to be after the elements less than x (see below).
    The partition element x can appear anywhere in the "right partition";
    it does not need to appear between the left and right partitions. 
    EXAMPLE
    Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
    Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8 */

// there appear to be many "right" answers for a given input

// we can do this in O(N)
// iterate over the list while moving all of the left elements to head
// we don't need to move the right elements to the tail
// because they will bubble to the tail-end automatically
const partitionAround = (linkedList, value) => {
  let prev, next, head, cur = linkedList.head
  while(cur){
    next = cur.next, head = linkedList.head;
    if (cur.data < value && prev){
      prev.next = cur.next;
      cur.next = head;
      linkedList.head = cur;
    } else prev = cur;
    cur = next;
  }
  return linkedList;
}

module.exports = { partitionAround };
