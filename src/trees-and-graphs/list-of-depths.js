/** Given a binary tree, design an algorithm which creates a linked list of all the nodes
    at each depth (e.g., if you have a tree with depth D, you'll have D linked lists). */

const { Queue } = require("../stacks-and-queues/queue");

// example input
//        1
//      /   \
//     2     3
//    / \   / \
//   4   5 6   7
//  /           \
// 8             9
//  \
//   10
//     \
//      11

// example output
// [
//   1,
//   2 -> 3,
//   4 -> 5 -> 6 -> 7
//   8 -> 9,
//   10,
//   11
// ]


// recursive solution, can be generalized to n-ary tree
// with a stack solution, we could have an index stack and a node stack
// we could also use BFS (a queue), but either way we need to visit every node
const indexNodesAtDepth = (node, depths=[], depth=0) => {
  depths[depth] = {node, next: depths[depth] || null}
  // "fill in" the depths structure, starting with the RIGHT subtree for ordering
  node.right && indexNodesAtDepth(node.right, depths, depth+1);
  node.left && indexNodesAtDepth(node.left, depths, depth+1);
  // recursion is done, depths must be full
  // we will use head/dummy nodes, but this isn't necessary at all
  return depths.map(next => ({next}))
}

// BFS is something like:
//   start with [root] queue, and [root] depths
//   while queue is non empty
//     for each item in the queue
//       get children, create linked list of all children
//       push linked list to depths
//     clear the queue, push all linked children to queue

// modified the above pseudo code to fix some bugs
const indexNodesAtDepthBFS = rootNode => {
  const queue = new Queue, depths = [], children = [];
  queue.push(rootNode);
  let next = null, node;
  while (!queue.isEmpty()){
    // gather the current children in reverse order
    while(!queue.isEmpty())
      children.push(node = queue.pop());
    // add next children to the queue
    for (node of children) {
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    // generate a depth list in reverse*reverse=forward order, clearing out the children
    while(node = children.pop()) next = {node, next};
    depths.push({next});
    next = null;
  }
  return depths;
}   

module.exports = { indexNodesAtDepth, indexNodesAtDepthBFS };
