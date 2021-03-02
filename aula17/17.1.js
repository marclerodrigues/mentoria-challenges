// 1. Escreva um programa em JavaScript que liste todas as
// propriedades de um objeto.
// const student = {
//   name: 'Marcle Rodrigues',
//   grade: 'A',
//   age: 26
// };
// => name, grade, age

const student = {
  name: 'Marcle Rodrigues',
  grade: 'A',
  age: 26
};

console.log(Object.getOwnPropertyNames(student));

// V2
// for(let key in student) {
//   console.log(key)
// }
