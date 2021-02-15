/*
Crie um array com datas de quando você foi à academia ou fez atividade
fisica. Crie uma função para verficar se dado um array de datas, você fez
atividade física nos ultimos sete dias.
ENTRADA
    Recebe array com datas de quando fez atividade física
PROCESSAMENTO
    Pega cada data do array
        Testa o seguinte:
            Se a data faz parte dos últimos 7 dias então:
                Indica que foi feita atividade fisica
    Após a última data se nenhuma data apareceu nos últimos 7 dias então:
        Indica que nenhuma atividade fisícia foi feita
SAIDA
    Mostra msg se fez ou não atividade física nos últimos 7 dias.
um dia = 24 * 60 * 60 * 1000 = 86400000 milisegundos
*/

const datesExercises = [
  '2020/2/10',
  '2021/2/4',
  '2021/2/1',
  '2021/2/7',
  '2021/2/5',
];

const answer = madePhysicalActivity(datesExercises);

console.log(`Fez atividade física nos últimos 7 dias? ${answer}`);

function madePhysicalActivity(datesExercises) {
  const aDayMilisec = 86400000;
  const sevenDaysAgoMilisec = new Date().getTime() - (aDayMilisec*7);

  for(let date of datesExercises) {
    if (new Date(date).getTime() > sevenDaysAgoMilisec) {
      return 'SIM';
    }
  }

  return 'NãO';
}
