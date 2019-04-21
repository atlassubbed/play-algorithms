/** Implement a method to perform basic string compression using the counts of repeated characters.
    For example, the string "aabcccccaaa" would become a2blc5a3.
    If the "compressed" string would not become smaller than the original string,
    your method should return the original string (we'll call this "failure").
    You can assume the string has only uppercase and lowercase letters (a - z). */


// we'll just do a simple, potentially not optimized linear solution
// there is probably a way to mutate the str in-place
// we could assume str isn't a str but actually a mutable array
// for now, we'll assume it's a str

const compressString = str => {
  // return orig for obvious failure cases (n = 0, 1, 2)
  const n = str.length;
  if (n < 3) return str;
  // set up the initial state to avoid checking inside the loop
  let cur = str[0], compressed = [cur], c = 1;
  for (let i = 1; i < n; i++){
    if (str[i] !== cur) {
      // we can short circuit if we know we're past the compression limit
      if (compressed.push(c, cur = str[i]) >= n)
        return str;
      c = 1;
    } else c++;
  }
  // clean up our final state, avoid constructing a str if length puts us over the limit
  if (compressed.push(c) >= n) return str;
  return compressed.join("");
}

module.exports = { compressString };
