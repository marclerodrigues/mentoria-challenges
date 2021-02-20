// 4. Escreva uma função que ordene os elementos de um array de ordem
// crescente.

// Inicio: Um array de elementos Ex: [3,1,10,2]
// Processamento:
//  1. Usar a função sort do array usando como argumento uma função
//  que retorna o resultado da subtração de a - b;
// Saida: O array ordenado de maneira crescente. Ex: [1,2,3, 10]


const sort = (array) => {
  return array.sort((a, b) => a - b);
};

console.log(sort([3, 1, 10, 2]));
