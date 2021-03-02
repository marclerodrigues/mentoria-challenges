// 01. Crie uma função que recebe um array de 2 números
// e coloque eles em ordem
// crescente. Não use o método sort

// Entrada => [10,2]
// Processamento => 
// Se primeiro número é maior que ou igual ao segundo,
// alterar a posição do segundo número para o indice 0.
// Retornar o array.
// Se não, retornar o array
// Saida => [2, 10]

const sort = (array) => {
    if (array[0] >= array[1]) {
        const oldValue = array[0];
        array[0] = array[1]
        array[1] = oldValue;
    }

    return array;
};

console.log(sort([10,2]));
console.log(sort([2, 5]));
