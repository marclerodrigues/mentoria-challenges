// 2. Escreva uma função em JavaScript que verifique se uma string passada é
// um palindromo ou não.
//   Um palindromo é uma palavra, frase ou sequencia que é lida da mesma maneira
// de trás pra frente, por exemplo: "madam", "nurses run", "roma me tem amor".

// Entrada:
//  1. Receber um variavel do tipo string e armazenar na variavel string
// Processamento:
//  1. Se a entrada for vazia, a gente retorna que é falso;
//  2. Se a entrada tiver tamanho 1, a gente já retorna que é verdadeiro;
//  3. Converter a entrada para minusculo e remover todos os espaços;
//  4. Compara a entrada limpa com o seu reverso:
//    1. Caso sejam iguais a gente retorna verdadeiro,
//    2. Caso sejam diferentes a gente retorna falso.
// Saida:
//  1. Verdadeiro caso a entrada seja um palindromo
//  2. Falso caso a entrada não seja um palindrom

function isPalindrome(string) {
  if (!string || string === '') {
    return false;
  }

  if (string.length === 1) {
    return true;
  }

  const convertedString = string.toLowerCase().replace(/ /g, '');

  const reversedString = convertedString.split('').reverse().join('');

  return convertedString === reversedString;
}

console.log(isPalindrome('rener'));
console.log(isPalindrome('arara'));
console.log(isPalindrome('madam'));
console.log(isPalindrome('nurses run'));
console.log(isPalindrome('mada'));
