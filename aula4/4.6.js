// 6 – Peça ao usuário para digitar vários nomes.
// Exiba na tela todos os nomes
// digitados, porém de maneira invertida (do último
// para o primeiro).


// Entrada: 5 nomes
// Processamento:
//  1. Inicializar o nameCount com 0;
//  2. Inicializar um array chamado names com valor [];
//  3. Pedir para o usuário digitar os nomes até que o
//  nameCount seja 5, salvando cada nome no array names;
//  4. Percorrer o array de maneira invertida,
//  mostrando cada nome na tela;
// Saida: Mostrar no console os nomes de maneira
// invertida

const readlineSync = require('readline-sync');

const reverseOrder = () => {
  let nameCount = 0;
  const names = [];

  while(nameCount < 5) {
    const input = readlineSync.question(`Digite o ${nameCount + 1} nome:`);

    names.push(input);

    nameCount++;
  }

  for(let i = names.length-1; i >= 0; i--) {
    console.log(names[i]);
  }
};

reverseOrder();
