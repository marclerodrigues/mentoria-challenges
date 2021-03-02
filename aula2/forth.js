// 01. Crie uma função que recebe um array de 3 números
// e coloque eles em ordem
// crescente. Não use o método sort.

// Entrada => [10,2, 1]
// Processamento =>
// Criar um array chamado sorted, para receber os
// elementos ordenados. 
// Percorrer o array inicial, fazendo a comparação do
// elemento
// atual com o elemento anterior.
// Se for menor, inserimos o elemento atual 
// na posição anterior no array sorted.
// Se for maior, inserimos o elemento atual 
// na posição posterior no array sorted.
// Retornar o array.
// Saida => [1, 2, 10]

const sort = (array) => {
    const sorted = [];

    array.forEach(element => {
        if (sorted.length > 0) {
            const firstNumber = sorted.find((n) => n >= element)

            if (firstNumber) {
                const lastElementIndex = sorted.indexOf(firstNumber);
                sorted.splice(lastElementIndex, 0, element);
            } else {
                sorted.push(element);
            }
        } else {
            sorted.push(element);
        }
    });

    return sorted;
};

console.log(sort([10, 2, 1]));
console.log(sort([10, 1, 2]));
console.log(sort([1, 2, 10]));
console.log(sort([1, 2, 10, 4]));