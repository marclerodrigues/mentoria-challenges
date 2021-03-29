const LEFT = 0
const RIGHT = 1

class Node {
  constructor(value) {
    this.value = value
    this.descendants = []
    this.parent = null
    this.occurrences = 1
    this.parentSide = null
  }

  get left() {
    return this.descendants[LEFT]
  }

  set left(node) {
    this.descendants[LEFT] = node

    if (node) {
      node.parent = this
      this.parentSide = LEFT
    }
  }

  get right() {
    return this.descendants[RIGHT]
  }

  set right(node) {
    this.descendants[RIGHT] = node

    if (node) {
      node.parent = this
      this.parentSide = RIGHT
    }
  }

  setLeftAndUpdateParent(node) {
    this.left = node

    if (node) {
      node.parent = this
      node.parentSide = LEFT
    }
  }

  setRightAndUpdateParent(node) {
    this.right = node

    if (node) {
      node.parent = this
      node.parentSide = RIGHT
    }
  }

  get isParentLeftChild() {
    return this.parentSide === LEFT
  }

  get isParentRightChild() {
    return this.parentSide === RIGHT
  }
}

module.exports = Node
