/** Given a string, write a function to check if it is a permutation of a palin­drome.
    A palindrome is a word or phrase that is the same  rwards and backwards.
    A permutation is a rearrangement of letters.
    The palindrome does not need to be limited to just dictionary words. */

// this can be done in linear time.
// assume we don't care about spaces.
// assume we only have a-z lowercase or case insensitivity
// every letter must appear an even number of times except one (the middle one) if length % 2
//
// note that we don't care about spaces palindrome contains

const originCode = "a".charCodeAt(0);

const getState = charCode => 2**(charCode-originCode);

// there might be a better way to do this
const isPowerOfTwo = n => {
  n = Math.log2(n);
  return n === (n | 0);
}

const isPalPerm = str => {
  // str = str.toLowerCase(); // uncomment this line if we need to normalize input

  // we use a bit vector (state) to keep track of letter parity.
  // this is fine since the |alphabet| < 32
  // we will use count to check whether or not the string is even or odd
  let state = 0, count = 0, n = str.length, c;
  // fill the state vector with letter parities using bitwise XOR (toggle)
  while(n--) {
    const c = str[n];
    if (c !== " ") {
      state ^= getState(c.charCodeAt(0)), count++;
    }
  }
  // if str has even number of chars, state must be 0, otherwise it must be a power of two.
  return count % 2 ? isPowerOfTwo(state) : !state;
}

module.exports = { isPalPerm };
