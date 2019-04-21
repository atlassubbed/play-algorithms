/** Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
    write a method to rotate the image by 90 degrees. Can you do this in place? */

// well, this should probably be done with matrix transformations on a GPU

// could easily support transposing along the other diagonal
// to support rotating in the opposite direction
// in-place quadratic
const transpose = matrix => {
  const n = matrix.length; // n x n
  for (let i = 0; i < n; i++){
    for (let j = i+1; j < n; j++){ // don't bother visiting the diagonal or the reflected side
      const mirror = matrix[j][i];
      matrix[j][i] = matrix[i][j], matrix[i][j] = mirror;
    }
  }
  return matrix;
}

// could easily support flipping along other axes
// to support rotating in the opposite direction
// in-place quadratic
const flip = matrix => {
  const n = matrix.length; // n x n
  // don't bother visiting the middle row or the reflected side
  const maxRow = Math.floor(n/2);
  for (let i = 0; i < maxRow; i++){
    const mirrorRow = n - i - 1;
    for (let j = 0; j < n; j++){
      const mirror = matrix[mirrorRow][j];
      matrix[mirrorRow][j] = matrix[i][j], matrix[i][j] = mirror;
    }
  }
  return matrix;
}

const rotateBy90 = matrix => flip(transpose(matrix));

module.exports = { rotateBy90 };
