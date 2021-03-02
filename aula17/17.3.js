// 3. Escreva um programa em JavaScript que receba um objeto e gere um
// novo objeto onde os valores viraram as chaves e as chaves
// viraram os valores.

const student = {
  name: 'Marcle Rodrigues',
  grade: 'A',
  age: 26
};

console.log(transformKeysAndValues(student))
// => { 'Marcle Rodrigues': 'name', 'A': 'grade', '26': 'age' }

function transformKeysAndValues(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  )
}
