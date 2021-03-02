/*without - Escreva uma função que retorna um novo objeto sem as propriedades
que foram passadas.
/
* Task description: Write a method that returns new object without provided properties
* Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }
* Task complexity: 2 of 5
* @param {Object} object - Any object
* @param {?} args - list of properties to remove from object
* @returns {Object} - New object without listed values
/
const without = (object, ...args) => {
throw new Error(`put your solution here ${object} ${args}`);
};
const data = { a: 1, b: 2 };
console.log(without(data, 'b')); // { a: 1 }
*/

const without = (object, ...args) => {
  for(let property of args){
    delete object[property];
  }

  return object;
};

let data = { a: 1, b: 2 };
console.log(without(data, 'b')); // { a: 1 }
