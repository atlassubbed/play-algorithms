/** Write code to remove duplicates from an unsorted linked list.
    How would you solve this problem if a temporary buffer is not allowed? */

// example: in:  1 -> 2 -> 5 -> 4 -> 6 -> 5 -> 3 -> 2 -> 4
//          out: 1 -> 2 -> 5 -> 4 -> 6 -> 3


// the second question probably means do it in-place and mutate the original list?

// simple solution is to keep a hash table of "seen" items and remove on-the-fly

// this is linear and mutates the original list
// uses O(K) extra memory where K is the number of unique nodes
// input form: Node {data: Number, next: Node}, List {head: Node}
const dedupeList = linkedList => {
  let seen = {}, cur = linkedList.head, prev = null;
  // immediately return linkedList if has no head
  while(cur){
    if (seen[cur.data])
      cur = prev ?
        (prev.next = cur.next) :
        (linkedList.head = cur.next);
    else
      seen[cur.data] = true,
      cur = (prev = cur).next;
  }
  return linkedList;
}

// doesn't require O(K) space
// basically just do a quadratic nested loop:
// for each item, iterate over the remaining items, removing dupes
const dedupeListSlow = linkedList => {
  let p1 = linkedList.head, p2, prev2;
  while(p1){
    p2 = (prev2 = p1).next;
    while(p2) p2 = (p2.data === p1.data) ?
      (prev2.next = p2.next) :
      (prev2 = p2).next;
    p1 = p1.next;
  }
  return linkedList;
}

module.exports = { dedupeList, dedupeListSlow };
