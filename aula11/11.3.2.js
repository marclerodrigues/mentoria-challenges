const last = (array, nLasts = 1) => {
    return array.slice(nLasts * -1);
};

console.log(last([1,2,3])) // => 3
console.log(last([1,2,3], 2)) // => [2, 3]
