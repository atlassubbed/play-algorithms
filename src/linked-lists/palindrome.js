/** Implement a function to check if a linked list is a palindrome. */

// for simplicity, assume there are no spaces

// idx:  1    2    3    4    5    6    7
// len:  7    6    5    4    3    2    1
// list: r -> a -> c -> e -> c -> a -> r

// we could solve this with a stack
// the manual stack solution is boring since we just push the first half onto a stack and
// pop off and check equality for the second half:
//   [r, a, c], (e is middle, so skip) now we're pointing to c -> a -> r
//   while(node): assert node.data === stack.pop(), point to next node

// so we look at a hint which suggests using recursion
const getNextIfPalindrome = (node, n, i=1) => {
  const { next } = node;
  // handle parity and exit condition
  if (n === i || (n === i - 1)) return next || true;
  const sister = n === i + 1 ? next : getNextIfPalindrome(next, n-1, i+1)
  if (!sister || sister.data !== node.data) return false;
  // handle exit condition
  return sister.next || true;
}

const isPalindrome = linkedList => {
  let n = 0, cur = linkedList.head;
  if (!cur) return true;
  do n++; while(cur = cur.next);
  return getNextIfPalindrome(linkedList.head, n)
}


module.exports = { isPalindrome };
