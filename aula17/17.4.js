// 4. Escreva uma função em JavaScript que verifica se um objeto tem a
// propriedade passada como argumento.

const obj = { name: 'Marcle' }

hasKey(obj, 'name') // => true
hasKey(obj, 'different') //=> false

function hasKey(obj, key) {
  console.log(obj.hasOwnProperty(key));
}
