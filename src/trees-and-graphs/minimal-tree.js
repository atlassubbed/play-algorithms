/** Given a sorted (increasing order) array with unique integer elements,
    write an algo­rithm to create a binary search tree with minimal height. */


// [1,2,3,4];
//     stepping thorugh this example helps
//       3
//      / \
//     2   4
//

const makeTree = (arr, min, max) => {
  if (min === max) return null;
  const index = (min+max)/2|0;
  return {
    left: makeTree(arr, min, index), 
    right: makeTree(arr, index+1, max),
    value: arr[index]
  };
}
const makeBinarySearchTree = sortedArr => {
  // should error check here to make sure arr is actually sorted
  // or we could sort it if it isn't
  return makeTree(sortedArr, 0, sortedArr.length)
}

module.exports = { makeBinarySearchTree };
