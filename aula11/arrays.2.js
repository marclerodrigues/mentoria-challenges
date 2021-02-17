// Reverse
const a = [1,2,3,4,5];
a.reverse()
// => [5,4,3,2,1]

// Includes
const b = [1,2,3];

b.includes(1)
// => true
b.includes(10);
// => false

// includes(elemento, posicaoInicialDaBusca)
b.includes(1, 2);
// => false

// Every
const c = [18,21];
c.every((age) => age >= 18);

c.every((elemento, index, arrayOriginal) => age >= 18);
c.every((elemento, index) => age >= 18);

// Some
const d = [18, 21, 12];
d.some(age => age < 18);
d.some((age, index, arrayOriginal) => age < 18);
d.some((age, index) => age < 18);

// Filter
const e = [18, 21, 12];
// Algoritmo para filtrar
// a = [18, 21, 12]
// aTemp = []
//
// for(let el of a) {
//  if (function(el)) {
//    aTemp.push(el)
//  }
// }
//
// returnaTemp;
//
e.filter((age) => age >= 18);
e.filter((age, index, arrayOriginal) => age >= 18);
e.filter((age, index) => age >= 18);

// Find
const f = [18, 21, 12];
f.find((age) => age < 18);
f.find((age, index, arrayOriginal) => age < 18);
// => 12

// Map
const g = [18, 21, 12];
const message = (el, index, arrayOriginal) => {
  if(el >= 18) {
    return "Parabéns! Você ganhou uma cerveja!";
  } else {
    return "";
  }
};
g.map(message);
// => [ "Parabéns!...", "Parabéns!...", "" ]

// Reduce
const h = [1,2,3];
const sum = (acc, el, index, arrayOriginal) => {
  return acc + el;
};
h.reduce(sum, 0);
// => 6
