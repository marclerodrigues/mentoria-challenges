if (1 > 2) {
  console.log("1 é maior que 2");
}

if (1 < 2) {
  console.log("1 é menor que 2");
}

if (2 == "2") {
  console.log("2 é igual à 2");
}

if (2 === "2") {
  console.log("2 é igual à 2");
}

if (2 != "2") {
  console.log("2 é diferente de 2");
}

if (2 !== "2") {
  console.log("2 é diferente de 2");
}

if (2 >= 2) {
  console.log("2 é maior que ou igual à 2");
}

if (2 <= 2) {
  console.log("2 é menor que ou igual à 2");
}


// Curto Circuito
// Se a primeira retornar falso, ele nem tenta executar
// a segunda;

if (2 <= 2 && 3 <= 4) {
  console.log("Entrou na condição");
}

if (2 <= 2 || 3 <= 4) {
  console.log("Entrou na condição");
}

const func = () => console.log("Executou");
let condicao = true;

condicao && func();

if (!true) {
}

// Converter valor literal para booleano
if (!!"Marcle") {
  console.log("Entrou na condição");
}

// Executando operações ou funções
const adult = () => true;
const child = () => false;

if (adult() && !child()) {
  console.log("Entrou na condição");
}
