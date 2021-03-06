//  * Queue (fila)
//  * enqueue - Adiciona um elemento no final da fila
//  * dequeue - Remove um elemento do começo da fila
//  * isEmpty - Retorna verdadeiro caso a fila esteja vazia
//  * isFull - Retorna verdadeiro caso a fila esteja cheia
//  * peek - Retornar o valor do começo da fila, porém ele não remove o elemento.

class Queue {
  constructor(capacity) {
    this._capacity = capacity;
    this._items = [];
    this._count = 0;
  }

  enqueue(e) {
    if(this.isFull()) {
      console.log('Queue is full!');
    } else {
      this._items.push(e);
      this._count++;
    }

    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty!');
    } else {
      this._count--;
      return this._items.shift();
    }
  }

  isEmpty() {
    return this._count === 0;
  }

  isFull() {
    return this._count === this._capacity;
  }

  peek() {
    if (this.isEmpty()) {
      console.log('Queue is empty!');
    } else {
      return this._items[0];
    }
  }
}
