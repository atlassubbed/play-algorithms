/** Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree.
    Avoid storing additional nodes in a data structure.
    NOTE: This is not necessarily a binary search tree. */

// parent pointers don't exist here
// could be generalized to N-ary trees

// basically "reduce" information over a tree, similar to array.reduce
// just return the first node where the vector is [1,1]
// this solution ends up walking the entire tree, might be a way to stop walking 
// once the LCA is found
const lowestCommonAncestor = (rootNode, n1, n2) => {
  // could short circuit if !n1 or !n2 or !both
  let node = false;
  // bit vector 000000000..000xx to avoid creating array junk
  const getVec = n => {
    if (!n) return 0;
    // this is where "reduce" occurs: merge information (single int) and send it up the tree
    // merge 4 binary vectors
    const cur = (n === n1) | 2*(n === n2) | getVec(n.left) | getVec(n.right);
    // the first node that gets a positive signal in both components is our LCA
    return node = node || cur === 3 && n, cur;
  }
  getVec(rootNode);
  return node;
}

module.exports = { lowestCommonAncestor };
