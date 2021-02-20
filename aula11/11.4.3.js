/*
Escreva uma função que ordene os elementos de um array de ordem
crescente.
*/

const array = [1,2,5,3,6,4, 10];

const crescent = (array) => array.sort((a, b) => a - b);

console.log(crescent(array));
