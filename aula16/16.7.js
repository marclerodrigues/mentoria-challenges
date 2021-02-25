// 7. Escreva uma função em JavaScreipt que aceita dois parametros,
// uma string e uma letra,
// a função vai contar o número de ocorrência da letra na string passada.
// Exemplo:: 'w3resource.com', 'o'
// Saida Esperada: 2

function countOccurrences(string, letter) {
  let count = 0;

  for(let i = 0; i < string.length; i++) {
    const l = string[i];

    if (l === letter) {
      count++;
    }
  }

  return count;
}

console.log(countOccurrences('w3resource.com', 'w'));
