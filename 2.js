// 2 – Faça um programa que peça números e imprima o quadrado de cada número.

// Entrada: Pedir para o usuário números reais
// Processamento:
//  1. Receber o número
//  2. Mostrar o seu quadrado
//  3. Pedir um novo número
//  4. Se o número for igual à "sair", encerrar a execução.
// Saida: Mostrar na tela o quadrado de cada número (número * número)

const readlineSync = require('readline-sync');

let run = true;

while(run) {
  const input = readlineSync.question('Digite o seu número: ');

  if (input === 'sair') {
    run = false;
  } else {
    const number = Number(input);

    console.log(number*number);
  }
}
