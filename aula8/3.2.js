// 3 – Peça ao usuário para digitar 5 números. Verifique qual
// é o maior número e exiba-o.


// Entrada: 5 números reais digitados pelo usuário.
// Processamento:
//  1. Receber os 5 números do usuário.
//  2. Comparar os 5 números e verificar qual o maior dentre eles.
//  3. Mostrar qual o maior número dentre os 5.
// Saida: O maior número real dentre os digitados pelo usuário


const readlineSync = require('readline-sync');

let run = true;
let count = 0;
const numbers = [];
let biggest = 0;

while(run) {
  const input = readlineSync.question(`Digite o número ${count + 1}: `);
  const number = Number(input);

  if (count >= 4) {
    run = false;
  } else {
    count += 1;

    numbers.push(number);
  }
}

for(let i = 0; i < numbers.length; i++) {
  const currentNumber = numbers[i];

  if (currentNumber > biggest) {
    biggest = currentNumber;
  }
}

console.log(biggest);
