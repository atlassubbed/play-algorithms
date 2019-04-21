/** Write an algorithm such that if an element in an MxN matrix is 0, 
    its entire row and column are set to 0. */


// quadratic, with O(N + M) ~ O(max(N, M)) space
const crossZero = matrix => {
  const m = matrix.length, n = matrix[0].length;
  const zeroRows = {}, zeroCols = {};
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      if (!matrix[i][j])
        zeroRows[i] = zeroCols[j] = true;
  for (let i in zeroRows)
    for (let j = 0; j < n; j++)
      matrix[Number(i)][j] = 0;
  for (let j in zeroCols)
    for (let i = 0; i < m; i++)
      matrix[i][Number(j)] = 0;
  return matrix;
}

// edit: the book as an even more clever solution that uses constant space
//   the main idea is to use the first row and column as storage and to incrementally
//   zero out the elements as you iterate if the zeroes are set in the first row/col

module.exports = { crossZero };
