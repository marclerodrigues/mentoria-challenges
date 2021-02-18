// 5. Cria uma função que retorne o número de dias entre duas
// datas.
//
// 1 dia - 24 * 60 * 60 * 1000 -> Total de milisegundos em 1 dia.
// 1 dia tem 86400000 milisegundos
//
// Entrada:
//  1. Receber a data inicial e salvar ela em startDate;
//  2. Receber a data final e salvar ela em endDate;
// Processamento:
//  3. Fazer a conversão das datas para milliseconds e calcular a diferença entre elas;
//  4. Salvar o resultado da diferença em um variavel chamada difference;
//  5. Dividir a difference pelo total de milliseconds em 1 dia
//  e salvar em um variavel chamada differenceInDays;
// Saida: 
//  6. Mostrar differenceInDays na tela.

const diffBetweenDates = (start, end) => {
  const dayInMilliseconds = 24 * 60 * 60 * 1000;
  const currentDate = new Date(end);
  const startDate = new Date(start);
  const difference = currentDate.getTime() - startDate.getTime();
  let differenceInDays = Math.floor(
    difference / dayInMilliseconds
  );

  if (differenceInDays < 0) {
    differenceInDays = differenceInDays * -1;
  }

  console.log(differenceInDays);
};

diffBetweenDates('2021-02-10', '2021-02-18');
diffBetweenDates('2021-02-18', '2021-02-10');
