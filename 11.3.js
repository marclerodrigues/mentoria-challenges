// 3. Escreva uma função que recebe um array e retorna o último elemento do array
// se nenhum outro argumento for passado, porém se outro argumento for
// passado ela vai retornar os ultimos "n" elementos do array.

// Entrada:
//  1. Um array de N elementos chamado array;
//  2. O número de elementos esperados no novo array chamado n, quando não
//  existir usar o valor 1.
// Processamento:
//  1. Criar uma variavel newArray que começa vazia e vai receber os elementos
//  à serem mostrados.
//  2. Percorrer o array "array" partindo de n até 0, para cada elemento
//  encontrado vamos adicionar o elemento no array "newArray";
// Saida:
//  1. Retorna o array "newArray".

const first = (array, n = 1) => {
  const newArray = [];

  for(let i = n; i > 0; i--) {
    newArray.push(array[i]);
  }

  return newArray;
};

console.log(first([1,2,3])) // => 3
console.log(first([1,2,3], 2)) // => [2, 3]
