// 7 – Peça para o usuário digitar uma data. Exiba separadamente o dia,
// o mês e o ano.

// Formato da Data -> DD-MM-YYYY
// Novo Formato da Data -> DD/MM/YYYY
//
// Entrada: Receber uma data
// Processamento:
//  1. Receber a data do usuário
//  2. Separar o dia, o mês e o ano da data.
//  3. Mostrar na tela a mensagem com os dados separados.
// Saida: Exibir a mensagem: "Dia: X, Mês: Y, Ano: Z"

const readlineSync = require('readline-sync');

const input = readlineSync.question('Digite a data: ');

let [ day, month, year ] = input.split(/-|\//);

console.log(`Dia: ${day}, Mês: ${month}, Year: ${year}`);




