// 7. Crie um array com datas de quando você foi à academia ou
// fez atividade
// fisica. Crie uma função para verficar se dado um array de
// datas, você fez
// atividade física no primeiro dia do ano de 2021.

// Entrada:
//  1. Receber um array de datas em que fizemos atividade fisica,
//  e salvar em uma variavel chamada dates;
// Processamento:
//  1. Inicializar uma variavel chamada firstDayOfYear,
//  que vai ser um objeto date e receber o valor de
//  '2021-01-01';
//  2. Percorrer o array de dates verificando se cada data é
//  igual à data do primeiro dia do ano, comparando o tempo
//  em milisegundos;
//  3. Caso encontremos uma data, mostrar 'Sim';
//  4. Caso não encontremos, mostrar 'Não'.
// Saida:
//  1. Sim (fizemos atividade no dia 2021-01-01
//  2. Não (não fizemos atividade no dia 2021-01-01

const datesExercises = [
  '2020/2/10',
  '2021/2/4',
  '2021/2/1',
  '2021/2/7',
  '2021/2/5',
  '2021/1/1',
];

const madePhysicalActivity = (dates) => {
  const firstDayOfYear = new Date(2021, 0, 1);
  let result = 'Não';

  for(let date of dates) {
    const convertedDate  = new Date(date);

    if (convertedDate.getTime() === firstDayOfYear.getTime()) {
      result = 'Sim';
      break;
    }
  }

  console.log(result);
};

madePhysicalActivity(datesExercises);
