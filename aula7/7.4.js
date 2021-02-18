// 4. Encontre o número de dias entre hoje e 1 de Janeiro de
// 2017.

// 1 dia - 24 * 60 * 60 * 1000 -> Total de milisegundos em 1 dia.
// 1 dia tem 86400000 milisegundos
//
// Entrada: 
// Processamento:
//  1. Criar uma variavel chamada today que recebe a date de hoje;
//  2. Criar uma variavel chamada startDate que recebe a data de '2017-01-01';
//  3. Fazer a conversão das datas para milliseconds e calcular a diferença entre elas;
//  4. Salvar o resultado da diferença em um variavel chamada difference;
//  5. Dividir a difference pelo total de milliseconds em 1 dia
//  e salvar em um variavel chamada differenceInDays;
// Saida: 
//  6. Mostrar differenceInDays na tela.

const dayInMilliseconds = 24 * 60 * 60 * 1000;
const currentDate = new Date();
const startDate = new Date(2017, 0, 1);
const difference = currentDate.getTime() - startDate.getTime();
const differenceInDays = Math.floor(
  difference / dayInMilliseconds
);

console.log(differenceInDays);
