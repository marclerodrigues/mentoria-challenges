/*
Escreva um programa em JavaScript que receba um objeto e gere um novo
objeto onde os valores viraram as chaves e as chaves viraram os valores.
const student = {
name: 'Marcle Rodrigues',
grade: 'A',
age: 26
};
transformKeysAndValues(student)
=> { 'Marcle Rodrigues': 'name', 'A': 'grade', '26': 'age' }
*/

const student = {
    name: 'Marcle Rodrigues',
    grade: 'A',
    age: 26
};

transformKeysAndValues(student)

function transformKeysAndValues(student){
    const newObject = {};

    for (let i in student){
        newObject[student[i]]=i;
    }

    console.log(newObject);
}
