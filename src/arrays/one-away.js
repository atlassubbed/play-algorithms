/** There are three types of edits that can be performed on strings: 
    insert a character, remove a character, or replace a character. 
    Given two strings, write a function to check if they are one edit (or zero edits) away. */


// we could find the longest common subsequence and assert that
// it is either length-1 or length of the first input string
// but IIRC LCS is not linear
// or we can try something that might be linear...

// this is linear, assumes str1.length === str2.length
const isOneOrZeroReplacementsAway = (str1, str2) => {
  let n = str1.length, replacements = 0;
  while(n--)
    if (str1[n] !== str2[n])
      if (++replacements > 1)
        return false;
  return true;
}

// this is linear, assumes str2.length - str1.length === 1
const isOneRemovalAway = (str1, str2) => {
  let n1 = str1.length, n2 = str2.length, i1 = 0, i2 = 0;
  // we will go through and compare characters, allowing for one removal
  // and requiring that all remaining characters be identical
  while(i2 < n2){
    if (str1[i1] !== str2[i2]){
      if (i1 !== i2)
        return false;
    } else i1++;
    i2++;
  }
  return true;
}

const isOneEditAway = (str1, str2) => {
  const n1 = str1.length, n2 = str2.length;
  // short circuit impossible case, trivially requires more than 1 removal/addition
  if (Math.abs(n1 - n2) > 1) return false;
  // there are three possible cases:
  //   if n2 === n1 then at most one character must differ (linear)
  //   if n2 - n1 === 1 then one character must be removed
  //   if n1 - n2 === 1 then one character must be added

  if (n2 === n1) return isOneOrZeroReplacementsAway(str1, str2);
  // the symmetry here allows us to use the same function with swapped args
  return isOneRemovalAway(n1 > n2 ? str2 : str1, n1 > n2 ? str1 : str2);
}

module.exports = { isOneEditAway };
