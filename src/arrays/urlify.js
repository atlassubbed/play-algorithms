/** URLify: Write a method to replace all spaces in a string with '%20'
    You may assume that the string has sufficient space at the end to hold the additional characters
    and that you are given the "true" length of the string. Perform this in-place.
    
    EXAMPLE:
      Input:  "Mr John Smith    ", 13
      Output: "Mr%20John%20Smith" */

// i will assume the input is in array form
// as strings in js are immutable (no in-place)
// since arrays can be dynamically extended, we'll just keep it simple
// and assume we can push onto the array

// O(N) solution

const ESC = ["%", "2", "0"];

const escapeSpaces = (arr, trueLen) => {
  // first, we count the number of spaces O(N)
  let spacesCount = arr.reduce((p, c) => c === " " ? p+1 : p, 0);

  // then we compute the final index after escaping
  // be sure to account for the fact that spaces already take up a spot
  let finalIndex = trueLen + spacesCount * (ESC.length-1)

  // then we walk from the previous end, and "right justify" the contents
  // adding escapes when necessary, making sure to update our indexes
  // O(N) -- note that just because we have two nested loops, doesn't mean this is quadratic.
  // the inner loop scales with the length of the escape seq, which is constant here.
  while(trueLen--){
    const c = arr[trueLen];
    if (c !== " ") arr[--finalIndex] = c;
    else for (let i = ESC.length; i--;)
      arr[--finalIndex] = ESC[i];
  }
}

module.exports = {
  escapeSpaces
}
