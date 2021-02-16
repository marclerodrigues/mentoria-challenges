// Copiando um array

const a = [1,2,3,4];

let b = Array.from(a);

let c = [...b];

// Verifica se é um array

const d = [1,2];
const e = 1;

Array.isArray(d); // true
Array.isArray(e); // false

if (d instanceof Array) {
  console.log("d is an array");
}

const func = (input) => {
  if (!Array.isArray(input)) {
    return;
  }

  console.log("Executou");
};

func(1);

func([1]);

// Verifica se não é um número
// NaN = Not a Number
isNaN(1) // false
isNaN("asdf") // true

const sum = (a, b) => a + b;

// Ordenar um array

let f = [1,2,5,10,100];

f.sort() // Converte para string e compara
// => [1,10,100,2,5];

// const compara = (a, b) => {
  // return -1; // a é menor que o b
  // return 0; // a é igual ao b
  // return 1; // a é maior que o b
// };

// Ordena crescente
const compara = (a, b) => a - b;

// Ordena decrescente
const comparaDesc = (a, b) => b - a;

f.sort(compara);
f.sort(comparaDesc);


f = [1,2,5,10,100];

// Ordenação Crescente
fTemporario = [1, 2, 5];

a = 1
b = 2
1 - 2 = -1

a = 2
b = 5
2 - 5 = -3

// Ordenação decrescente
fTemporario = [5, 2, 1]

a = 1
b = 2
2 - 1 = 1

a = 2
b = 5
5 - 2 = 3

f = [1, 5, 2];
// Ordenação Crescente
fTemporario = [1, 2, 5];

a = 1, indexA = 0;
b = 5, indexB = 1;
// a - b => -4

if (indexA < indexB && a - b < 0) {
  fTemporario.push(a);
  fTemporario.push(b);
}

a = 5, indexA = 1;
b = 2, indexB = 2;
// a - b => 3

if (indexA < indexB && a - b > 0)  {
  fTemporario.splice(1, 0, 2);
}

// 1 - 2 = -1
// 5 - 10 = -5
