/** Given a circular linked list,
    implement an algorithm that returns the node at the beginning of the loop.
    DEFINITION
      Circular linked list:
        A (corrupt) linked list in which a node's next pointer points to an earlier node,
        so as to make a loop in the linked list.
    EXAMPLE      
                        .-------.
                       v         \
      Input: A -> B -> C -> D -> E
      Output: C */


// we can use cycle detection via kahn's algorithm or DFS (as when doing topological sort)
// we would have to mark nodes or use a hash set
// is there a way to do it without using extra linear space?

// just write the simple solution, but it uses O(N) space
// think of a better solution later
const getCycleStart = l => {
  let visited = new WeakSet, cur = l.head;
  while(cur){
    if (visited.has(cur)) return cur;
    visited.add(cur)
    cur = cur.next;
  }
  // no cycle, thus no cycle start
  return null;
}



module.exports = { getCycleStart };
