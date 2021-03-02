var meuArray = [20, 8, 10];

console.log(crescente(meuArray));
console.log(crescente([1, 2, 10]))
console.log(crescente([2, 1, 10]))

function crescente(meuArray) {
    let a = meuArray[0];
    let b = meuArray[1];
    let c = meuArray[2];
    var num1, num2, num3

    console.log(meuArray);
    if (a<b && a<c) {
        num1 = a;
    } else if (b<a && b<c) {
        num1 = b;
    } else if (c<a && c<b) {
        num1 = c;
        console.log("aqui");
    }

    if (num1 == a) {
        num2 = b<c ? b : c;
        num3 = num2 == b ? c : b;
    } else if (num1 == b) {
        num2 = a<c ? a : c;
        num3 = num2 == a ? c : a;
    } else if (num1 == c) {
        num2 = b<a ? b : a;
        num3 = num2 == b ? a : b;
    }
    
    return novoArray = [num1, num2, num3]
}