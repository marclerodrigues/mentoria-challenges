// 3. Escreva uma função em JavaScript que retorna uma string passada com as
// letras em ordem alfabética. Assuma que pontuações e números não estão
// incluidas na string passada.
// Exemplo: "webmaster"
// Saida Esperada: "abeemrstw"

function alphabeticalOrder(string) {
  const withoutSpaces = string.replace(/ /g, '');

  return withoutSpaces
    .split('')
    .sort()
    .join('');
}

console.log(alphabeticalOrder('edcba'));
console.log(alphabeticalOrder('cba'));
console.log(alphabeticalOrder('webmaster'));

