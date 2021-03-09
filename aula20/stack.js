class Stack {
  constructor(capacity) {
    this._capacity = capacity || Infinity;
    this._items = [];
  }

  push(e) {
    if (this._items.length < this._capacity) {
      this._items.push(e);
    } else {
      console.log('Stack is full!');
    }

    return this;
  }

  pop() {
    return this._items.pop();
  }

  isEmpty() {
    return this._items.length === 0;
  }

  isFull() {
    return this._items.length === this._capacity;
  }

  peek() {
    return this._items[this._items.length - 1]
  }
}

module.exports = Stack;
