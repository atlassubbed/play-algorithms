/** Implement an algorithm to determine if a string has all unique characters.
    What if you cannot use additional data structures? */

// no-brain solution

// this solution is brute force O(N^2) (quadratic).

/** Trick: You can derive the O(N^2) forumula here geometrically.
    For EACH element, we're looking at all the remaining elements.
    If there are N = 5 elements:
       * for the 1st element, we look at 4 remaining elements
       * for the 2nd element, we look at 3 remaining elements
       * for the 3rd element, we look at 2 remaining elements
       * for the 4th element, we look at 1 remaining element
       * there is no need to consider the 5th element
         since we already compared it to the other 4.
    The amount of work for N = 5 is roughly (4 + 3 + 2 + 1) = 10.

        xxxx  (4) +
        xxx   (3) +
        xx    (2) +
        x     (1) =
        ____________
              (10)

    If you take N to infinity, the crossed region approaches N^2/2, which is O(N^2). */

const isUniqueCharacterSetQuadratic = str => {
  let n = str.length;
  // short circuit obvious cases
  if (n > 1) while(n--){
    // we could skip the last (first) element in str, however
    // that would not change the runtime complexity
    // it is better to first optimize the runtime complexity
    // before making micro-optimizations
    const c1 = str[n];
    for (let m = n; m--;){
      const c2 = str[m];
      if (c1 === c2)
        return false;
    }
  }
  return true;
}

// Looking at hint #44 in CTCI, we can use a bit vector.
// instead of making bad optimizations in the quadratic solution
// it's better to implement a linear solution:

// assume the character set uses 8 bits of entropy
// begin to paramterize this in case these requirements change
// maybe we could later refactor these as options to the function
const ENTROPY = 8, INT_SIZE = 32;

// makes a bit vector which acts a charCode -> boolean map
const makeCharCodeToBooleanMap = () => {
  let length = 2**ENTROPY/INT_SIZE;
  if (length !== length|0) length = length|0 + 1;
  return new Uint32Array(length);
}

// tells us how to look up the state for a charCode
const getState = charCode => ({
  index: charCode / INT_SIZE | 0,      // which integer in the array this code belongs to
  component: 2**(charCode % INT_SIZE)  // what bitvector component it belongs to
})

const isUniqueCharacterSetLinear = str => {
  let n = str.length;
  if (n < 2) return true; // short circuit obvious cases
  const states = makeCharCodeToBooleanMap();
  while(n--){
    const { index, component } = getState(str.charCodeAt(n));
    // if we already have this code, return false
    if (states[index] & component) return false;
    // otherwise, store the code in the state
    states[index] |= component;
  }
  return true;
}

// linear-log solution
// hint #132 suggests there is a linear-log solution 
// we can get linear-log time by pre-sorting the array.
// we could also try to do a custom sort and short-circuit
// as soon as we find equivalent neighbors.
const isUniqueCharacterSetLinearLog = str => {
  // first, we'll create a character code array O(N)
  let codeArray = [], n = str.length, neighbor, cur;
  for (let i = 0; i < str.length; i++)
    codeArray.push(str.charCodeAt(i));
  // then, we'll do an in-place linear-log sort
  // which becomes the new dominating term in the complexity
  // note that the sort order doesn't matter
  codeArray.sort((c1, c2) => c1 - c2);
  // then we'll just see if any neighbors are equal
  // this is also linear, so it does not change the runtime complexity
  while(n--){
    cur = codeArray[n];
    if (cur === neighbor) return false;
    neighbor = cur;
  }
  return true;
}

module.exports = {
  isUniqueCharacterSetQuadratic,
  isUniqueCharacterSetLinear,
  isUniqueCharacterSetLinearLog
}

