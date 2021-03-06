class Stack {
  constructor(capacity) {
    this._capacity = capacity || Infinity;
    this._items = {};
    this._count = 0;
  }

  push(e) {
    if (this._count < this._capacity) {
      this._items[this._count] = e;
      this._count++;
    } else {
      console.log('Stack is full!');
    }

    return this;
  }

  pop() {
    const value = this._items[this._count - 1];

    this._count--;

    delete this._items[this._count - 1];

    if (this._count < 0) {
      this._count = 0;
    }

    return value;
  }

  isEmpty() {
    return this._count === 0;
  }

  isFull() {
    return this._count === this._capacity;
  }

  peek() {
    return this._items[this._count - 1];
  }
}
