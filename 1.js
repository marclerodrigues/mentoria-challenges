// 1 – Calcule a média de diversas notas digitadas pelo usuário.
// O número de notas pode variar. O usuário vai usar o comando
// "fim" para dizer quando as notas
// acabaram e o calculo da média pode ser feita.


// Entrada: Várias notas do tipo númerico/real.
// Processamento:
//  1. Receber as notas até que o usuário digite "fim".
//  2. Fazer a soma de todas as notas e dividir pelo número de notas.
//  3. Retornar o valor calculado da média.
// Saida: Média Aritmética das notas inseridas pelo usuário.

const gradesAverage = () => {
  const readlineSync = require('readline-sync');

  let run = true;
  let gradesCount = 0;
  let gradesSum = 0;

  while(run) {
    const grade = readlineSync.question('Insira a nota: ');

    if (grade === 'fim') {
      run = false;
    } else {
      const parsedGrade = Number(grade);
      gradesCount += 1;
      gradesSum += parsedGrade;
    }
  }

  const media = gradesSum / gradesCount;

  console.log(`A media das notas é: ${media}`);

  return media;
}

gradesAverage();














