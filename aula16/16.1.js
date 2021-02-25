// 1. Escreva uma função em JavaScript que reverta um número.
// Exemplo: 1245
// Saida Esperada: 5421

function revertNumber(number) {
  const convertedNumber = String(number);
  const reversed = convertedNumber.split('').reverse().join('');

  return Number(reversed);
};

console.log(revertNumber(1245));
