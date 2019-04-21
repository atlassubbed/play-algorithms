/** Assumeyou have a method isSubstringwhich checks if one word is a substring of another.
    Given two strings, sl and s2, write code to check if s2 is a rotation of s1
    using only one call to isSubstring.
    Example: "waterbottle" is a rotation of "erbottlewat". */


// we can solve this by continuing the second string once so
// it contains a full in-phase substring of the first string

// this is our given helper, is s1 a substr of s2, this can clearly be implemented in linear time
// with, for example, atlas-seq-matcher
const isSubstring = (s1, s2) => s2.includes(s1);

// we call it once
const areRotations = (s1, s2) => isSubstring(s1, s2+s2);

module.exports = { areRotations };
