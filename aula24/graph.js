class Graph {
  constructor(numberOfVertices) {
    this.numberOfVertices = numberOfVertices
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    if (!this.adjacencyList.has(value)) {
      this.adjacencyList.set(value, new Set([]))
    }
  }

  removeVertex(value) {
    this.adjacencyList.forEach((list, node) => {
      if (list.has(value)) {
        list.delete(value)
      }
    })

    this.adjacencyList.delete(value)
  }

  addEdge(source, destination) {
    this.adjacencyList.get(source).add(destination)
    this.adjacencyList.get(destination).add(source)
  }

  removeEdge(source, destination) {
    this.adjacencyList.get(source).delete(destination)
    this.adjacencyList.get(destination).delete(source)
  }

  print() {
    const vertices = this.adjacencyList.keys()

    for (let i of vertices) {
      const values = this.adjacencyList.get(i);

      let string = "";

      for (let j of values) {
        string += `${j} `
      }

      console.log(`${i} -> ${string}`)
    }
  }
}

module.exports = Graph

const graph = new Graph()

graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('d')

graph.addEdge('a', 'a')
graph.addEdge('a', 'b')
graph.addEdge('b', 'c')
graph.addEdge('c', 'd')
graph.addEdge('d', 'b')
graph.addEdge('d', 'c')

graph.removeEdge('a', 'b')

graph.print()
