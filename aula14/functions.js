function square(numero) {
  return numero * numero;
}

square(1);

// Parametro -> Variavel usada na definição da função
// Argumento -> Dado que você passa quando invoca a função.

// Passagem por valor

const currency = Number(100);

function tip(total) {
  total *= 0.1;

  return total;
}

console.log(currency);
tip(currency);
console.log(currency);

// Passagem por Referência

const person = { name: 'Marcle', age: 26 };

function changeName(person) {
  person.name = 'João';

  return person;
}

console.log(person);
changeName(person);
console.log(person);

// Passagem por Referência 2

const users = ['Marcle', 'João', 'Maria'];

function removeUser(users, user) {
  const userIndex = users.indexOf(user);

  users.splice(userIndex, 1);

  return users;
}

console.log(users);
removeUser(users, 'Marcle');
console.log(users);

// Function Expressions ou Expressões de Função

const square = function(n) { return n * n };

const square = function sqr(n) { return n * n };

function map(f, array) {
  const result = [];

  for(let i = 0; i < array.length; i++) {
    result[i] = f(array[i]);
  }

  return result;
}

map(function(x) { return x * x }, [1, 2, 3]);

// Chamando Funções - Invocando Funções

// Não funciona! - Invocar a função antes da declaração utilizando function expressions
square(5);

var square = function(n) { return n * n };
// FIM do Não funciona!

// Fatorial -> 2 = 1 * 2
function fatorial(n) {
  if (n === 0 ou n === 1) {
    return 1;
  } else {
    return (n * fatorial(n - 1));
  }
};

// Construtores

function Car(model, year) {
  this.model = model;
  this.year = year;
  this.running = false;

  this.startEngine = () => this.running = true;
}

const car = new Car('Corolla', 1994);
//
// function Car(model, year) {
//   const c = {};
//
//   c.model = model;
//   c.year = year;
//
//   return c;
// }


// call(this, args)

function Product(name, price) {
  this.name = name;
  this.price = price;

  return this;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

const cheese = new Food('Cheese', 50);
const soldier = new Toy('Soldier of Liberty', 35);

// apply(this, [args])
function Product(name, price) {
  this.name = name;
  this.price = price;

  return this;
}

function Food(name, price) {
  Product.apply(this, [name, price]);
  this.category = 'food';
}

function Toy(name, price) {
  Product.apply(this, [name, price]);
  this.category = 'toy';
}

const cheese2 = new Food('Cheese', 50);
const soldier2 = new Toy('Soldier of Liberty', 35);

// Escopo da Função

let n1 = 20, n2 = 3, name = 'Marcle';

function multiply() {
  return n1 * n2;
}

function getScore() {
  let n1 = 2, n2 = 3;

  function add() {
    return `${name} scored ${n1+n2}`;
  }

  return add();
}

// Recursão

const print  = function prt(n) {
  console.log(n);

  if (n === 0) { return };

  prt(n - 1);
};

const print2  = function prt(n) {
  console.log(n);

  if (n === 0) { return };

  print2(n - 1);
};

const print3  = function prt(n) {
  console.log(n);

  if (n === 0) { return };

  arguments.callee(n - 1);
};
