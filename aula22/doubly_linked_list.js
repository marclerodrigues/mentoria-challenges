class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
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
    const newTail = this.tail.prev;

    if (newTail) {
      newTail.next = null;
      this.tail.prev = null;
    } else {
      this.head = null;
    }

    this.tail = newTail;

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
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
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

    if (this.head !== this.tail) {
      newHead.prev = null;
      node.next = null;
    } else {
      this.tail = null;
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

    const after = this.getNodeAtIndex(index);
    const before = after.prev;

    after.prev = newNode;
    before.next = newNode;
    newNode.next = after;
    newNode.prev = before;

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

    const node = this.getNodeAtIndex(index);

    const before = node.prev;
    const after = node.next;

    node.prev = null;
    node.next = null;

    before.next = after;
    after.prev = before;

    this.length--;

    return node;
  }

  // Print the entire list
  print() {
    if (this.head) {
      let currentNode = this.head;

      while(currentNode.next) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }

      console.log(currentNode.value);
    } else {
      console.log("Empty list");
    }
  }
}

const newList = new DoublyLinkedList();

newList.push(1);
newList.push(2);
newList.push(3);

newList.pop();
newList.shift();
newList.unshift(4);
newList.push(10);
newList.push(11);

newList.print();
