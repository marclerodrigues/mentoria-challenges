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

// Objeto de Argumento

function multiply(a, b) {
  console.log(arguments['0']);
  console.log(arguments['1']);

  return a * b;
}

function concat(separador) {
  let result = '';

  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separador;
  }

  return result;
}

concat(', ', 'Marcle', 'João', 'Maria');

// Parametro Padrão

// Verificação Manual do Valor Padrão
function multiply(a, b) {
  if (typeof b === 'undefined') {
    b = 1;
  }

  return a * b;
}


function multiply(a, b = 1) {
  return a * b;
}

// Parametro rest

function multiply(multiplicador, ...args) {
  return args.map(x => multiplicador * x);
}

const a = multiply(2, 1, 2, 3);

console.log(a);

// Arrow Functions ou Funções de Seta

const square = (x) => x * x

map((x) => x * x, [])

const multiplyByTwo = (n) => {
  this.name = 'Marcle';

  const multiply = (a, b) => {
    console.log(this)
    const self = function(n) {
      console.log(this)
      return n;
    }

    self(a);

    return a * b;
  }

  return multiply(2, n);
}

const multiply = (x) => (x * x);
const multiply = (x) => {
  return { [x]: x };
};

// Não funciona porque uma nova função rouba o contexto (this).
function Pessoa() {
  this.idade = 0;

  setInterval(function crescer() {
    this.idade++
    console.log(this.idade)
  }, 1000);
}

var p = new Pessoa();

// Funciona usando Hack de salvar o contexto em uma variavel
function Pessoa() {
  var self = this;

  self.idade = 0;

  setInterval(function crescer() {
    self.idade++
    console.log(self.idade)
  }, 1000);
}

var p = new Pessoa();

// Funciona com Arrow functions porque elas não tem o próprio contexto
function Pessoa() {
  this.idade = 0;
  const oneSecond = 1000;

  const incrementAge = () => {
    this.idade++
    console.log(this.idade)
    console.log(this);
  }

  setInterval(incrementAge, oneSecond);
}

var p = new Pessoa();
