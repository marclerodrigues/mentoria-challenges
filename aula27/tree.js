const Queue = require('../aula20/queue.js')

class Node {
  constructor(value) {
    this.value = value
    this.descendants = []
    this.parent = null
  }

  addChild(node) {
    node.parent = this

    this.descendants.push(node)

    return this
  }

  removeChild(node) {
    const childIndex = this.descendants.indexOf(node)

    node.parent = null

    if (childIndex !== -1) {
      this.descendants.splice(childIndex, 1)
    }
  }
}

const html = new Node('html')
const head = new Node('head')
const body = new Node('body')
const p = new Node('p')
const title = new Node('title')

// html
//   head
//     title
//   body
//     p

html.addChild(head)
html.addChild(body)
head.addChild(title)
body.addChild(p)

// console.log(html)

// Breadth First Search
const bsf = (root) => {
  const q = new Queue();

  q.enqueue(root)

  while(!q.isEmpty()) {
    const node = q.dequeue()

    console.log(node.value)

    node.descendants.forEach(child => q.enqueue(child))
  }
}

// Depth First Search
const printTree = (root) => {
  const descendants = [...root.descendants]

  console.log(root.value)

  while(descendants.length !== 0) {
    const child = descendants.shift()

    printTree(child)
  }
}

bsf(html)
console.log("---------------------")
printTree(html)
