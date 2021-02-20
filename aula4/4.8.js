// 8. O cardápio de uma casa de lanches é dado pela tabela abaixo:
// Escreva um algoritmo que leia o código do item adquirido
// pelo consumidor e a quantidade, calculando e mostrando o valor
// a pagar. Não será necessário exibir o produto e o valor,
// somente o valor final. O usuário pode fazer um pedido com qualquer
// número de itens. O usuário digita "Fim" para encerrar a
// entrada de itens.
// Ex: 2 cocas e 1 pizza G.
// Item: 100
// Quantidade: 2
// Item: 105
// Quantidade: 1
//
// Item: "Fim"
//
// Valor total: R$ 56,50

// Entrada: Código do Item e quantidade do item.
// Processamento:
//  1. Ler o menu do arquivo menu.csv e armazenar o valor em uma
//  variavel chamada menu;
//  2. Receber o código do item e a quantidade do item até que o usuário
//  digite "Fim".
//  3. Ao ser digitado "Fim", realizar a soma total do pedido e salvar
//  na variavel total.
//  4. Mostra o valor total na tela em forma de reais.
// Saide: Valor total da comanda.

const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');

const filePath = path.join(__dirname, 'menu.csv');

const menu = {};

fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (row) => {
    // { "code": "105", "name": "Pizza P", "price": "55" }
    menu[row.code] = Number(row.price);
  })
  .on('end', () => {
    calculatePrice(menu);
  });


const calculatePrice = (menu) => {
  let run = true;
  let total = 0;

  while(run) {
    const codeInput = readlineSync.question('Item: ');

    if (codeInput === "Fim") { break };

    const item = menu[codeInput];

    if (item) {
      const quantity = Number(readlineSync.question('Quantidade: '));
      total += item * quantity;
    }
  }
  const format = { style: 'currency', currency: 'BRL' };
  const currency = total.toLocaleString('pt-BR', format);

  console.log(`Valor total: ${currency}`);
};







