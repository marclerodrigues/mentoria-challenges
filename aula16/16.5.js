// 5. Escreva uma função em JavaScript que aceita uma string como parametro e conta
// o número de vogais presentes na string. (y não conta como vogal).
// Exemplo: "The quick brown fox"
// Saida Esperada: 5

function countVowels(string) {
  let count = 0;
  const dictionary = ['a', 'e', 'i', 'o', 'u'];

  for(let i = 0; i < string.length; i++) {
    const letter = string[i];

    if (dictionary.includes(letter)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels('The quick brown fox'));
console.log(countVowels('abcde'));
