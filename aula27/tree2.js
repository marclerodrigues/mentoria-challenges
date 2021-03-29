const Queue = require('../aula20/queue.js')
const Graph = require('../aula24/graph.js')

const graph = new Graph('directed')

graph.addVertex('html')
graph.addVertex('head')
graph.addVertex('body')
graph.addVertex('title')
graph.addVertex('div')
graph.addVertex('h1')
graph.addVertex('p')

graph.addEdge('html', 'head')
graph.addEdge('html', 'body')
graph.addEdge('head', 'title')
graph.addEdge('body', 'div')
graph.addEdge('div', 'h1')
graph.addEdge('div', 'p')

graph.depthFirstSearch('html')
console.log("------------------")
graph.breadthFirstSearch('html')
