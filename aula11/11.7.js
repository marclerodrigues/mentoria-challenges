// 7. Escreva uma função para encontrar um elemento em um array, caso exista
// retornar a posição, caso não exista retornar null.

// Entrada: Um array, e um elemento.
// Processamento:
//  1. Econtrar e retornar o indice do elemento no array.
//  2. Retornar null caso não encontre.
// Saida: Indice do elemento no array.


const findPosition = (array, element) => {
  const index = array.indexOf(element)

  return index >= 0 ? index : null
}

console.log(findPosition([1,2,3], 2));
console.log(findPosition([1,2,3], 10));
