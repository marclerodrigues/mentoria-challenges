const Queue = require('../aula20/queue.js');

class Graph {
  constructor(direction = 'undirected') {
    this.direction = direction
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

    if (this.direction === 'undirected') {
      this.adjacencyList.get(destination).add(source)
    }
  }

  removeEdge(source, destination) {
    this.adjacencyList.get(source).delete(destination)

    if (this.direction === 'undirected') {
      this.adjacencyList.get(destination).delete(source)
    }
  }

  breadthFirstSearch(startingNode) {
    let visited = new Map();
    let q = new Queue();

    visited.set(startingNode, true)

    q.enqueue(startingNode)

    while(!q.isEmpty()) {
      const element = q.dequeue()

      const adjacencyListForCurrentVertex = this.adjacencyList.get(element)

      adjacencyListForCurrentVertex.forEach((neighbour) => {
        if (!visited.get(neighbour)) {
          visited.set(neighbour, true)
          q.enqueue(neighbour)
        }
      })
    }

    console.log(visited.keys())

    return visited.keys();
  }

  depthFirstSearch(startingNode) {
    let visited = new Map()

    this.processAdjacentVertices(startingNode, visited)

    console.log(visited.keys())

    return visited.keys();
  }

  processAdjacentVertices(startingNode, visited) {
    visited.set(startingNode, true)

    const neighbours = this.adjacencyList.get(startingNode)

    neighbours.forEach((neighbour) => {
      if (!visited.get(neighbour)) {
        this.processAdjacentVertices(neighbour, visited)
      }
    })
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
//
// const graph = new Graph()
// const vertices = ['a', 'b', 'c', 'd', 'e', 'f']
//
// vertices.forEach((v) => graph.addVertex(v))
//
// graph.addEdge('a', 'b')
// graph.addEdge('a', 'c')
// graph.addEdge('a', 'd')
// graph.addEdge('b', 'e')
// graph.addEdge('c', 'f')
//
// graph.print()

// graph.breadthFirstSearch('a')
// graph.depthFirstSearch('a')
