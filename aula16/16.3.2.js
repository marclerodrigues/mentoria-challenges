/*
Escreva uma função em JavaScript que retorna uma string passada com as
letras em ordem alfabética. Assuma que pontuações e números não estão
incluidas na string passada.
Exemplo: "webmaster"
Saida Esperada: "abeemrstw"
function alphabeticalOrder(string) {
  const withoutSpaces = string.replace(/ /g, '');
  return withoutSpaces
    .split('')
    .sort()
    .join('');
}
console.log(alphabeticalOrder('edcba'));
console.log(alphabeticalOrder('cba'));
console.log(alphabeticalOrder('webmaster'));
*/

const myString = "cg ed efba"; //abcdeefg
// const myString = "marcos"; //acmors

console.log(alphabeticalOrder(myString));

function alphabeticalOrder(myString) {
  //    const withoutSpaces = myString.replace(/ /g, '');  
  let myStringOrdered = "_";
  let letter = "";
  let indexLetter = 0;
  let lastLetter;

  for (let i = 0; i <= myString.length - 1; i++) {
    letter = myString[i];
    lastLetter = myStringOrdered[myStringOrdered.length-1];

    if (letter > lastLetter) {
      myStringOrdered = myStringOrdered + letter;

    }else{
      for (let index = myStringOrdered.length - 1; index >= 0; index--) {

        if (letter >= myStringOrdered[index]){
          myStringOrdered = myStringOrdered.substring(0, index+1) + letter + myStringOrdered.substring(index+1);
          break;
        }
      }
    }
  }
  return myStringOrdered.slice(1,myStringOrdered.length); //Retira o caracter "_" do início da string. Pequena gambiarra!  
}
