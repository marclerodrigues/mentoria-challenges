class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyCircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isValidIndex(index) {
    return (index <= this.length || index > 0);
  }

  // Add a node at the end of the list
  push(val) {
    const newNode = new Node(val);
    const isEmpty = !this.head;

    if (isEmpty) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  // Remove node from the end of the list
  pop() {
    const isEmpty = !this.tail;

    if (isEmpty) {
      return null;
    }

    const node = this.tail;

    if (this.head !== this.tail) {
      // Procurar o node no indice anterior ao elemento que eu
      // quero remover
      const newTail = this.getNodeAtIndex(this.length - 2);

      newTail.next = this.head;
      this.tail = newTail;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;

    return node;
  }

  // Add node to the start of the list
  unshift(val) {
    const newNode = new Node(val);
    const isEmpty = !this.head;

    if (isEmpty) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }

    this.length++;

    return this;
  }

  // Remove node from the start of the list
  shift() {
    const isEmpty = !this.head;

    if (isEmpty) {
      return null;
    }

    const node = this.head;
    const newHead = this.head.next;

    if (!newHead) {
      this.tail = newHead;
    }

    this.head = newHead;

    this.length--;

    return node;
  }

  // Return node at given index
  getNodeAtIndex(index) {
    if (!this.isValidIndex(index)) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while(currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  // Update node at given index
  setNodeAtIndex(val, index) {
    const node = this.getNodeAtIndex(index);

    if (node) {
      node.value = val;

      return node;
    }

    return null;
  }

  // Add node at given index
  insertAtIndex(index, val) {

    if (!this.isValidIndex(index)) {
      return false;
    }

    if (index === 0) {
      return this.unshift(val);
    }

    if (index === this.length) {
      return this.push(val);
    }

    const newNode = new Node(val);

    const before = this.getNodeAtIndex(index - 1);
    const after = this.getNodeAtIndex(index);

    newNode.after;
    before.next = newNode;

    this.length++;

    return this;
  }

  // Remove node at given index
  removeFrom(index) {
    if (!this.isValidIndex(index)) {
      return false;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const before = this.getNodeAtIndex(index - 1);
    const node = this.getNodeAtIndex(index);

    before.next = node.next;

    node.next = null;

    this.length--;

    return node;
  }

  // Print the entire list
  print() {
    if (this.head) {
      let currentNode = this.head;

      while(currentNode.next) {
        console.log(currentNode);
        currentNode = currentNode.next;
      }

      console.log(currentNode);
    } else {
      console.log("Empty list");
    }
  }
}

const newList = new SinglyCircularLinkedList();

newList.push(1);
console.log(newList)
// newList.push(2);
// newList.push(3);

// newList.print();
