// 6. Escreva uma função em JavaScript que extraia os caracteres unicos de uma
// string.
// Exemplo: "marclerodrigues"
// Saida Esperada: "marcleodigus"

function unique(string) {
  const set = new Set();

  for(let i = 0; i < string.length; i++) {
    const letter = string[i];

    set.add(letter);
  }

  return [...set].join('');
}

console.log(unique('marclerodrigues'));
console.log(unique('abcdef'));
