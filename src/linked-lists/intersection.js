/** Given two (singly) linked lists, determine if the two lists intersect.
    Return the inter­secting node. Note that the intersection is defined based on reference, not value.
    That is, if the k-th node of the first linked list is the exact same node (by reference)
    as the jth node of the second linked list, then they are intersecting. */


// the only way I can think of lists intersecting without having 
// out-degree > 1 is in the following situation:
//     L1:   a -> b -> c -> d
//     L2    e -> f --/`
// in this case, it's a directed graph where a node has in-degree > 1
// node c has two inputs: b and f

// we can mark the nodes in the graph as visited and check if they're already visited

// we can add the nodes to a WeakMap and check if they're already in it

// both lists above will end at the same node

// we can compact these helpers into a single function to optimize by a constant factor
const doesIntersect = (l1, l2) => {
  if (!l1.head || !l2.head) return false;
  let cur = l1.head, last;
  while(cur.next) cur = cur.next;
  last = cur, cur = l2.head;
  while(cur.next) cur = cur.next;
  return cur === last;
}

const lengthOf = l => {
  let cur = l.head, n = 0;
  while(cur) n++, cur = cur.next;
  return n;
}

// a -> b -> c -> d -> e -> f  n1 = 6 start at 0 + (n1-n2)
// g -> h ------------/`       n2 = 4 start at 0
// compare each

// _s_maller, _l_arger
const _findIntersection = (s, l, delta) => {
  let p1 = s.head, p2 = l.head;
  while(delta--) p2 = p2.next;
  while(p1 !== p2)
    p1 = p1.next, p2 = p2.next;
  return p1;
}

// this can obviously be optimized but will not change the complexity
const findIntersection = (l1, l2) => {
  if (!doesIntersect(l1, l2)) return null;
  const n1 = lengthOf(l1), n2 = lengthOf(l2);
  return _findIntersection(n1 > n2 ? l2 : l1, n1 > n2 ? l1 : l2, Math.abs(n1-n2))
}

module.exports = { doesIntersect, findIntersection };
