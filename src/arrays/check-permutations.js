/** Given two strings, write a method to decide if one is a permutation of the other. */

// we can clearly solve this in linear time
// create a charCode -> count map for one and ensure the second is equal to it
// (assuming dupe chars are present)

// could export these helpers from a util module and unit test them
const fillCharCounts = (str, counts={}) => {
  // O(N)
  for (let i = str.length, cur; i--;)
    counts[cur = str[i]] = (counts[cur] || 0) + 1;
  return counts;
}
const shallowEquals = (obj1, obj2) => {
  let n1 = 0, n2 = 0;
  // O(K) where K is the total amount of unique chars, strictly < N
  for (let k in obj1)
    // js shortcut -- concise, but not as readable
    if (n1++, !(k in obj2) || obj1[k] !== obj2[k])
      return false;
  // ensure that obj2 has no superfluous keys
  return Object.keys(obj2).length === n1;
}
// simple logic thanks to helper functions
const arePermuations = (str1, str2) => {
  // could add checks to ensure str1 and str2 are the correct types
  const n1 = str1.length, n2 = str2.length;
  // short-circuits are evaluated before we run the heavier code
  return n1 !== n2 ? false :
    str1 === str2 || shallowEquals(fillCharCounts(str1), fillCharCounts(str2))
}

// if we don't wanna use O(K) extra space, and we're ok with mutating the input
// then we can do an in-place sort of both arrays
// and walk through them and ensure that the value at each index is equal.
// this would be linear-log, since the sorts dominate the subsequent linear checking

module.exports = {
  arePermuations
}
