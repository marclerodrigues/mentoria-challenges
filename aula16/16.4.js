// 4. Escreva uma função em JavaScript que aceita uma string como parametro e
// encontra a maior palavra contida na string.
// Exemplo: "Web Development Tutorial"
// Saida Esperada: "Development"

function biggestWord(string) {
  const words = string.split(' ');
  let biggestWord = '';

  for(let word of words) {
    if (word.length > biggestWord.length) {
      biggestWord = word;
    }
  }

  return biggestWord;
}

console.log(biggestWord('Web Development'));
console.log(biggestWord('Web Browser'));
console.log(biggestWord('Marcle'));

