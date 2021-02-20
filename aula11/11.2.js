// 2. Escreva uma função que recebe um array e retorna o primeiro elemento do
// array se nenhum outro argumento for passado, porém se outro argumento for
// passado ela vai retornar os "n" primeiros elementos do array.

// Entrada:
//  1. Um array de N elementos chamado array;
//  2. O número de elementos esperados no novo array chamado n, quando não
//  existir usar o valor 1.
// Processamento:
//  1. Criar uma variavel newArray que começa vazia e vai receber os elementos
//  à serem mostrados.
//  2. Percorrer o array "array" até o elemento no index n, para cada elemento
//  encontrado vamos adicionar o elemento no array "newArray";
// Saida:
//  1. Retorna o array "newArray".

const first = (array, n = 1) => {
  const newArray = [];

  for(let i = 0; i < n; i++) {
    newArray.push(array[i]);
  }

  return newArray;
};

console.log(first([1,2,3])) // => 1
console.log(first([1,2,3], 2)) // => [1,2]
