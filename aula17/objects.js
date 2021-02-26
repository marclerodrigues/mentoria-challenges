// JavaScript Objects

const object = {
  chave: 'valor',
};
const obj = new Object();

new Object // => {}
new Object(null) // => {}
new Object(undefined) // => {}
new Object([1,2,3]) // => [1,2,3]
new Object('string') // => 'string'

// Chaves de Maneira Dinâmica
const key = 'marcle';

{ [key]: 'Rodrigues' };

// Mesclando dois Objetos

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

Object.assign(destino, source);

Object.assign(target, source); // => { a: 1, b: 4, c: 5 }
Object.assign(target, source, { b: 7 }); // => { a: 1, b: 7, c: 5 }

// Copiando Objeto

const target2 = { a: 1, b: 2 };
const source2 = { b: 4, c: 5 };

Object.assign({}, target2); // Copia de target2

Object.assign({}, target2, source2);

// ES2015 - ES6 - EcmaScript 2015.
// Spread Operator
const target = { a: 1, b: 2 };
const target2 = { c: 1, d: 2 };
const target3 = { e: 1, f: 2 };
const array = [1,2,3,4];

const copy = { ...target };

const multipleCopy = { ...target, ...target2, ...target3 };

const arrayCopy = [...array];

// Transformando um objeto em algo iteravel

const idades = { marcle: 26, joao: 32, maria: 19 };

const idadesEntries = Object.entries(idades);
// [
//  ['marcle', 26]
// ]

idadesEntries.forEach(e => console.log(e[0]))
idadesEntries.forEach(e => console.log(e[1]))
idadesEntries.map(e => e[0])
idadesEntries.map(e => e[1])
idadesEntries.map(([key, value]) => key)
idadesEntries.map(([key, value]) => value)

// Array-like Object
// Quando temos um objeto onde as chaves podem ser
// consideradas como indices, ao usar o entries
// obtemos uma coleção ordenada pela chave.

const obj2 = { 0: 'a', 3: 'd', 1: 'b', 2: 'c' };

Object.entries(obj2);

// Iterando

for(let [key, value] of Object.entries(obj2)) {
  console.log(`Chave: ${key}, Valor: ${value}`);
}

for(let key in obj2) {
  const value = obj2[key];
  console.log(`Chave: ${key}, Valor: ${value}`);
}

Object.entries(obj2).forEach(([key, value]) => {
  console.log(`Chave: ${key}, Valor: ${value}`);
})

// fromEntries

const obj2Entries =  Object.entries(obj2).map(e => {
  e[1] = 'Marcle';
  return e;
})

Object.fromEntries(obj2Entries);
// => { 0: 'Marcle', 1: 'Marcle', 2: 'Marcle', 3: 'Marcle' }

// Transformando nosso Objeto

const users = {
  0: {
    name: 'Marcle',
    age: 26
  },
  1: {
    name: 'Maria',
    age: 19
  },
  2: {
    name: 'Joao',
    age: 32,
  }
};

Object.fromEntries(
  Object
  .entries(users)
  .map(([key, user]) => [ user.name, user.age ])
)


// Object.keys
Object.keys(users)
// Object.values
Object.values(users)
// Object.getOwnPropertyNames
Object.getOwnPropertyNames(users[0])
