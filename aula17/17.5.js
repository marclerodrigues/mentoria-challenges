// 5. without - Escreva uma função que retorna um novo objeto sem as
// propriedades que foram passadas.
/**
* Task description: Write a method that returns new object without provided properties
* Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }
* Task complexity: 2 of 5
* @param {Object} object - Any object
* @param {?} args - list of properties to remove from object
* @returns {Object} - New object without listed values
*/
const without = (object, ...args) => {
  const obj = { ...object};

  args.forEach((arg) => delete obj[arg]);

  return obj;
};
const data = { a: 1, b: 2 };
console.log(without(data, 'b', 'c', 'd')); // { a: 1 }
