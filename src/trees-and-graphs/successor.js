/** Write an algorithm to find the "next" node (i.e., in-order successor)
    of a given node in a binary search tree.
    You may assume that each node has a link to its parent. */

// the successor is the left-most child of the right subtree
// if the right subtree !E then the successor is the first right-most parent

// we can reuse the cur pointer and loop accordingly
const getSuccessor = (node, cur) => {
  if (cur = node.right)
    while(cur.left) cur = cur.left;
  else if (cur = node.parent)
    while(cur && cur.right === node)
      cur = (node = cur).parent;
  return cur;
}

module.exports = { getSuccessor };
