// 1. Escreva uma função que verifica se uma entrada é um array ou não.
// console.log(is_array('mentoria')); // => false
// console.log(is_array([1, 2, 4, 0])); // => true

const is_array = input => Array.isArray(input);

console.log(is_array('mentoria') === false);
console.log(is_array([1, 2, 4, 0]) === true);
