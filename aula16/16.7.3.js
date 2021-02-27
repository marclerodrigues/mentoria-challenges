// 7. Escreva uma função em JavaScreipt que aceita dois parametros,
// uma string e uma letra,
// a função vai contar o número de ocorrência da letra na string passada.
// Exemplo:: 'w3resource.com', 'o'
// Saida Esperada: 2

function countOccurrences(string, letter) {
  const regex = new RegExp(letter, "g");
  const matches = string.match(regex);
  const matchesFound = matches ? matches : [];

  return matchesFound.length;
}

console.log(countOccurrences('w3resource.com', 'o'));
