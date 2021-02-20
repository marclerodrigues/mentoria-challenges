// 9. Escreva uma função que cria um novo array com quantidade de elementos e o
// valor dados pelo usuário.
// console.log(fill(3, 'a')); // => ['a', 'a', 'a']
// console.log(fill(2, 'Marcle')); // => ['Marcle', 'Marcle']

const fill = (total, element) => {
  return Array(total).fill(element);
}
console.log(fill(3, 'a')); // => ['a', 'a', 'a']
console.log(fill(2, 'Marcle')); // => ['Marcle', 'Marcle']
