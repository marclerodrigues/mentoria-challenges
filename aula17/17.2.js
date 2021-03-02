// 2. Escreva um programa em JavaScript que exclua uma propriedade
// de um objeto, imprimindo o objeto antes e depois de excluir
// a propriedade.

const student = {
  name: 'Marcle Rodrigues',
  grade: 'A',
  age: 26
};

deleteProperty(student, 'grade');

function deleteProperty(obj, property) {
  console.log(obj);
  delete obj[property];
  console.log(obj);
}
