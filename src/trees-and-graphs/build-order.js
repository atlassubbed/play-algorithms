/** You are given a list of projects and a list of dependencies
    (which is a list of pairs of projects, where the second project is dependent on the first project).
    All of a project's dependencies must be built before the project is. 
    Find a build order that will allow the projects to be built.
    If there is no valid build order, return an error. 
    
    EXAMPLE
      Input: projects: [a, b, c, d, e, f]
             dependencies: [(a, d), (f, b), (b, d), (f, a), (d, c)]
      Output: [f, e, a, b, d, c] */

// this is a topological sort problem, the output order is not necessarily unique
// I will use DFS here because it is simpler than Khan's algorithm (BFS)

// we must color the nodes
const IDLE = 0;
const VISITED = 1;
const VISITING = 2;

// assuming all ids are unique, but can easily throw an error if they aren't.
// assuming edges are non-self-referential unique, and ref ids present in ids
// but can easily throw an error if they arent'.
const buildStack = (ids, directedEdges) => {
  // outgoing edges; out are the dependents of id
  const stack = [], index = ids.reduce((p, id) => (
    p[id] = {id, out: [], state: IDLE}, p
  ), {})
  // an edge is [id1, id2] where id2 depends on id1
  for (let edge of directedEdges)
    index[edge[0]].out.push(index[edge[1]]);
  for (let id in index)
    stack.push(index[id]);
  return stack;
}
const visit = (node, path) => {
  if (node.state === VISITED) return;
  if (node.state === VISITING){
    // should clean up all node states, but w/e
    // we could use weak sets to make this a non-issue
    throw new Error("cyclic deps");
  }
  node.state = VISITING;
  for (let out of node.out)
    visit(out, path);
  path.push(node);
  node.state = VISITED
}
const topologicalSortDirty = (ids, directedEdges) => {
  let stack = buildStack(ids, directedEdges), path = [], node;
  while(node = stack.pop()) visit(node, path);
  while(node = path.pop()) stack.push(node.id);
  return stack;
}

// instead of two weak sets, use a single weak map node -> state
// now we don't have to worry about cleaning up node state, unlike above solution
const topologicalSortClean = (ids, directedEdges) => {
  let state = new WeakMap, stack = buildStack(ids, directedEdges), path = [], node;
  // bonus: using a closure here helps avoid passing many args
  const visit = (n, s=state.get(n)) => {
    if (s === VISITED) return;
    if (s === VISITING) throw new Error("cyclic deps");
    state.set(n, VISITING);
    for (let out of n.out) visit(out);
    path.push(n);
    state.set(n, VISITED);
  }
  while(node = stack.pop()) visit(node);
  while(node = path.pop()) stack.push(node.id);
  return stack;
}

module.exports = { topologicalSortDirty, topologicalSortClean };
