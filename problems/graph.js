
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) { // node
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = []
    }
  }

  addEdges(srcValue, destValue) { // arrows // srcValue is vertex or node; destValue is a neighbor
    if (!this.adjList[srcValue]) {
      this.addVertex(srcValue)
    }
    if (!this.adjList[destValue]) {
      this.addVertex(destValue)
    }
    this.adjList[srcValue].push(destValue); // this.adjList[srcValue] is an array.
    this.adjList[destValue].push(srcValue); // this.adjList[destValue] is also an array.
  }


  buildGraph(edges) {
    // edges is a 2d array, e.g.: [["a", b"], ["b", c"]]
    // this.adjList = {"a": [b], "b": [c]}
    edges.forEach(pair => {
      this.addVertex(pair[0]);
      this.addEdges(pair[0], pair[1]);
    });
    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    let visited = new Set()
    let queue = [startingVertex]
    let vertices = []
    while (queue.length) {
      const vertex = queue.shift()
      if (visited.has(vertex)) continue
      visited.add(vertex)
      vertices.push(vertex)
      this.adjList[vertex].forEach(neighbor => {
        queue.push(neighbor)
      })
    }
    return vertices
  }

  depthFirstTraversalIterative(startingVertex) {
    let visited = new Set()
    let stack = [startingVertex]
    let vertices = []
    while (stack.length) {
      const vertex = stack.pop()
      if (visited.has(vertex)) continue;
      visited.add(vertex)
      vertices.push(vertex)
      this.adjList[vertex].forEach(neighbor => {
        stack.push(neighbor)
      })
    }
    return vertices;
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    for (let vertex in this.adjList) {
    if (visited.has(startingVertex)) {
      return vertices;
    }
    visited.add(startingVertex);
    vertices.push(startingVertex)
    this.adjList[startingVertex].forEach(neighbor => {
      this.depthFirstTraversalRecursive(neighbor, visited, vertices);
    })
  }
}
}

module.exports = {
  Graph
};
