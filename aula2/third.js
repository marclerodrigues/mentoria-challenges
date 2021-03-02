
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digit os 3 numeros separados por virgula', (answer) => {
    const numbers = answer.split(',')

    const newArray = [];

    for(let i = 0; i < numbers.length; i++) {
        const newIndex = numbers.length - 1 - i;
        newArray.push(numbers[newIndex]);
    }

    console.log(newArray);
    
    rl.close()
});