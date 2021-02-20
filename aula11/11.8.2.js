/*
Escreva uma função para gerar um array entre dois inteiros (valores positivos
e negativos são aceitos).
console.log(rangeBetween(4, 7)); // => [4, 5, 6, 7]
*/

function rangeBetween(int1, int2) {
  let myLength = int2 - int1;
  let length = myLength > 0 ? myLength : (myLength * -1);
  const mapFunction = (_, i) => myLength >= 0 ? i + int1 : int1 - i

  return Array.from({ length: length + 1 }, mapFunction);
}

console.log(rangeBetween(4,7))
console.log(rangeBetween(-4,7))
console.log(rangeBetween(4,-3))
