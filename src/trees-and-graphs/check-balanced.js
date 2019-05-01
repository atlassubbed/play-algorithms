/** Implement a function to check if a binary tree is balanced.
    A balanced tree is defined to be a tree such that the heights of the two subtrees
    of any node never differ by more than one. */

const isBalanced = (binaryTree, n) => {
  // if we reach a level that is not full,
  // assert that the nodes in that level have no children
  let stack1 = [binaryTree], stack2 = [], isLast = false;
  while(!isLast){
    while(n = stack1.pop()) {
      if (n.left) stack2.push(n.left);
      if (n.right) stack2.push(n.right);
      if (!(n.left && n.right)) isLast = true;
    }
    while(n = stack2.pop())
      stack1.push(n);
  }
  while(n = stack1.pop()){
    if (n.left || n.right)
      return false;
  }
  return true;
}

module.exports = { isBalanced };
