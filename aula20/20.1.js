const Stack = require('./stack');

class StackCalc {
  constructor() {
    this.stack = new Stack();
  }

  run(instructions) {
    const instructionsAttributes = instructions.split(' ');
    const instructionsAttributesLength = instructionsAttributes.length;

    for(let i = 0; i < instructionsAttributesLength; i++) {
      const instruction = instructionsAttributes[i];
      const isOperation = '+-*/'.indexOf(instruction);

      if (isOperation > -1) {
        const x = this.stack.pop();
        const y = this.stack.pop();

        if (!x || !y) {
          break;
        }

        switch(instruction) {
          case '+': {
            this.stack.push(x + y);
            break;
          }
          case '-': {
            this.stack.push(x - y);
            break;
          }
          case '*': {
            this.stack.push(x * y);
            break;
          }
          case '/': {
            this.stack.push(x / y);
            break;
          }
        }
      } else if (instruction === 'DUP') {
        this.stack.push(this.stack.peek());
      } else if (instruction === 'POP') {
        this.stack.pop();
      } else {
        this.stack.push(parseFloat(instruction));
      }
    }

    return this.value;
  }

  get value() {
    return this.stack.peek() || 0;
  }
}

console.log((new StackCalc()).run("")) // => 0
console.log((new StackCalc()).run("5 6 +")) // => 11
console.log((new StackCalc()).run("3 DUP +")) // => 6
console.log((new StackCalc()).run("6 5 5 7 * - /")) // => 5
console.log((new StackCalc()).run("6 5 5 7 * - / POP")) // => 0
