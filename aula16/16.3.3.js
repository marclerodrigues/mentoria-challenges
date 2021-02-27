// 3. Escreva uma função em JavaScript que retorna uma string passada com as
// letras em ordem alfabética. Assuma que pontuações e números não estão
// incluidas na string passada.
// Exemplo: "webmaster"
// Saida Esperada: "abeemrstw"

function alphabeticalOrder(string) {
  const withoutSpaces = string.replace(/ /g, '');
  let orderedString = '';

  for(let i = 0; i < withoutSpaces.length; i++) {
    const letter = withoutSpaces[i];

    if (i === 0) {
      orderedString += letter;
    } else if(letter >= orderedString[orderedString.length-1]) {
      orderedString += letter;
    } else {
      const splitted = orderedString.split('');
      const previousLetter = splitted.find((l) => l >= letter);
      const previousIndex = splitted.indexOf(previousLetter);

      splitted.splice(previousIndex, 0, letter);

      orderedString = splitted.join('');
    }
  }

  return orderedString;
}

console.log(alphabeticalOrder('edcba'));
console.log(alphabeticalOrder('cba'));
console.log(alphabeticalOrder('webmaster'));

