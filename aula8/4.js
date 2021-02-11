// 4 – Peça ao usuário para digitar várias idades. Exiba quantas pessoas
// são maior de idade 18 anos e quantas são menores.

// Entrada: Receber várias idades do tipo númerico
// Processamento:
//  1. Receber do usuário uma idade
//  2. Verificar se o usuário digitou "sair"
//    2.1 Caso sim, mostrar mensagem com a contagem total.
//    2.2.Caso não, comparar para ver se é maior de 18 anos.
//      2.2.1 Caso sim, incrementar total de maiores em 1.
//      2.2.2 Caso são, incrementar total de menores em 1.
// Saida: Mensagem dizendo "X pessoas são maiores de 18 anos e Y são menores".

const readlineSync = require('readline-sync');

let run = true;
let adults = 0;
let nonAdults = 0;

while(run) {
  const input = readlineSync.question('Digite uma idade: (Digite "sair" para encerrar) ');

  if (input === 'sair') {
    run = false;
  } else {
    const age = Number(input);

    if (age >= 18) {
      adults += 1;
    } else {
      nonAdults += 1;
    }
  }
}

console.log(`${adults} são maiores de 18 anos e ${nonAdults} são menores de idade.`);
