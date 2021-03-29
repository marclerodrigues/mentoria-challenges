// Binary Search Tree - BST
// left < parent < right
// No máximo 2 filhos.

const Node = require('./node')

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value)

    if (this.root) {
      const {
        found,
        parent
      } = this.findNodeAndParent(value)

      if (found) {
        found.occurrences += 1
      } else if (value < parent.value) {
        parent.left = node
      } else {
        parent.right = node
      }
    } else {
      this.root = node
    }

    this.size++

    return node
  }

  findNodeAndParent(value) {
    let node = this.root
    let parent

    while(node) {
      if (node.value === value) {
        break
      }

      parent = node
      node = (value >= node.value) ? node.right : node.left
    }

    return { found: node, parent }
  }

  remove(value) {
    const {
      found: nodeToRemove,
      parent
    } = this.findNodeAndParent(value)

    if (!nodeToRemove) return false

    const removedChildren = this.combineLeftIntoRightSubTree(nodeToRemove)

    if (nodeToRemove.occurrences > 1) {
      nodeToRemove.occurrences--
    } else if (nodeToRemove === this.root) {
      this.root = removedChildren

      if (this.root) {
        this.root.parent = null
      }
    } else if (nodeToRemove.isParentLeftChild) {
      parent.setLeftAndUpdateParent(removedChildren)
    } else {
      parent.setRightAndUpdateParent(removedChildren)
    }

    this.size--

    return true
  }

  combineLeftIntoRightSubTree(node) {
    if (node.right) {
      const left = this.getMin(node.right)

      left.setLeftAndUpdateParent(node.left)

      return node.right
    }

    return node.left
  }

  getMax(node = this.root) {
    if (!node || !node.right) {
      return node
    }

    return this.getMax(node.right)
  }

  getMin(node = this.root) {
    if (!node || !node.left) {
      return node
    }

    return this.getMin(node.left)
  }

  // left, parent, right
  inOrder(node = this.root) {
    if (node.left) {
      this.inOrder(node.left)
    }

    console.log(node.value)

    if (node.right) {
      this.inOrder(node.right)
    }
  }

  // parent, left, right
  preOrder(node = this.root) {
    console.log(node.value)

    if (node.left) {
      this.inOrder(node.left)
    }

    if (node.right) {
      this.inOrder(node.right)
    }
  }

  // left, right, parent
  postOrder(node = this.root) {
    if (node.left) {
      this.inOrder(node.left)
    }

    if (node.right) {
      this.inOrder(node.right)
    }

    console.log(node.value)
  }
}

// 30, 40, 10, 15, 12, 50

const bst = new BinarySearchTree()

bst.add(30)
bst.add(40)
bst.add(10)
bst.add(15)
bst.add(12)
bst.add(50)

bst.inOrder()
console.log('------')
bst.postOrder()
console.log('------')
bst.preOrder()

// bst.remove(50)
//
// console.log(bst)
//
// console.log(bst.getMax().value)
// console.log(bst.getMin().value)
