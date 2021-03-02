
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digit os 3 numeros separados por virgula', (answer) => {
    const numbers = answer.split(',')

    const newArray = [];

    for(let i = numbers.length - 1; i >= 0; i--) {
        newArray.push(numbers[i]);
    }

    console.log(newArray);
    
    rl.close()
});