/** Implement a function to check if a binary tree is a binary search tree. */


// we can just do a left-root-right DFS and assert that the sort order is obeyed.
// this works if the tree has no duplicates

// very concise if we use consistent return values
const updateValue = (next, cur, val=cur.value) => (
  (val == null || val <= next) && (cur.value = next, true)
)

// note we could export a wrapper since if caller provides second arg, this will break
const isBSTNoDupes = (node, cur={}) => !node || (
  isBSTNoDupes(node.left, cur) &&
  updateValue(node.value, cur) &&
  isBSTNoDupes(node.right, cur)
)

// this condition can change dep on the definition of BST we're using
const isWithin = (next, [min, max]) => next > min && next <= max;

// note we could export a wrapper since if caller provides second arg, this will break
const isBSTDupes = (node, range=[-Infinity, Infinity]) => !node || (
  isBSTDupes(node.left, [range[0], node.value]) &&
  isWithin(node.value, range) &&
  isBSTDupes(node.right, [node.value, range[1]])
)

// example wrapper
const isBST = (node, hasDupes=false) => (hasDupes ? isBSTDupes : isBSTNoDupes)(node);


module.exports = { isBSTNoDupes, isBSTDupes };
