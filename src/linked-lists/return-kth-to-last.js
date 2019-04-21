/** Implement an algorithm to find the kth to last element of a singly linked list. */

// seems easy in linear time
// just have a pointer which is k+1 elements behind the other

// we don't need to use a runner, because it doesn't impact the runtime
// to compute the length of the list... either way we'll be traversing the whole list
const getFromLast = (linkedList, k) => {
  if (k < 0) return null; // out of bounds
  if (Math.floor(k) !== k) return null; // invalid number 
  let runner = linkedList.head, cur = runner;
  k++;
  while(k--)
    if (!(runner = runner.next) && k)
      return null; // list not long enough 
  while(runner)
    runner = runner.next,
    cur = cur.next;
  return cur;
}

module.exports = { getFromLast };
