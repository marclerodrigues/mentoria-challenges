// 12. Crie uma função que receba um array de datas e retorne
// a maior data.
//
// Entrada:
//  1. Receber um array de datas e salvar na variavel date;
// Processamento:
//  1. Percorrer o array de datas, converter todas as todas para
//  ms, comparar qual a maior e mostrar na tela;
// Saida:
//  1. A maior data dentre as datas recebidas.

const datesExercises = [
  '2020/2/10',
  '2021/2/4',
  '2021/2/1',
  '2021/2/7',
  '2021/2/5',
  '2021/3/1'
];

const getLastDate = (dates) => {
  let maxDate;

  dates.forEach((date, index) => {
    const convertedDate = new Date(date);

    if (index === 0) {
      maxDate = convertedDate;
    } else {
      if (convertedDate.getTime() > maxDate.getTime()) {
        maxDate = convertedDate;
      }
    }
  });

  console.log(maxDate);
};

getLastDate(datesExercises);
