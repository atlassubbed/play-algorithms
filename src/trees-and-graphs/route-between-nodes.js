/** Given a directed graph, design an algorithm to find out whether there is a route between two nodes. */

const { Queue } = require("../stacks-and-queues/queue");


// since the graph is directed, we should do a BFS from n1 then n2
const hasRoute = (n1, n2, queue=new Queue) => {
  queue.push(n1);
  // could use flags directly on node as well, but that mutates the node
  const visited = new WeakSet;
  while(!queue.isEmpty()) {
    const node = queue.pop();
    if (visited.has(node)) continue;
    visited.add(node);
    for (let neighbor of node.neighbors) {
      if (neighbor === n2) return true;
      queue.push(neighbor);
    }
  }
  return false;
}

const hasRouteBetween = (n1, n2) => hasRoute(n1, n2) || hasRoute(n2, n1);

module.exports = { hasRouteBetween };
