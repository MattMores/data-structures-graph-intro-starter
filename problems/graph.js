
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
    // Code goes here ...
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

module.exports = {
  Graph
};
