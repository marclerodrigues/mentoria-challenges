//5 – Crie um programa que entre com os dados de altura e sexo de 5 pessoas.
//Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas são
//do sexo feminino. Mostre também qual é a maior altura e se essa altura é de um
//homem ou uma mulher.

const csv = require('csv-parser');
const fs = require('fs'); // File System
const path = require('path');
const filePath = path.join(__dirname, 'people.csv');

let menCount = 0;
let womenCount = 0;
let tallest = {};

fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (row) => {
    const { height, gender } = row;

    switch(gender) {
      case 'M': {
        menCount++;
        break;
      }
      case 'F': {
        womenCount++;
        break;
      }
      default:
        break;
    }

    const parsedHeight = Number(height);
    const tallestHeight = tallest.height || 0;

    if (parsedHeight >= tallestHeight) {
      tallest = row;
    }
  })
  .on('end', () => {
    console.log(`Total de Homens: ${menCount}
    Total de Mulheres: ${womenCount}
    A pessoa mais alta mede ${tallest.height} e é do genero ${tallest.gender}
    `);
  });
