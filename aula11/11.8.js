// 8. Escreva uma função para gerar um array entre dois inteiros (valores positivos
// e negativos são aceitos).

// Entrada:
//  1. start (4)
//  2. end (7)
// Processamento:
// Saida: Retornar uma coleção que o primeiro elemento seja o start (4) e o
// ultimo seja o end (7), e a coleção seja uma progressão aritmética
// (start + 1)..end.

const rangeBetween = (start, end) => {
  const array = [];

  for(i = start; i <= end; i++) {
    array.push(i);
  }

  return array;
}

console.log(rangeBetween(4,7));
console.log(rangeBetween(-4,7));
// console.log(rangeBetween(4,-3));
