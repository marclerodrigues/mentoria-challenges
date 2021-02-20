const first = (array, nFirsts = 1) => {
  return array.slice(0, nFirsts);
}

console.log(first([1,2,3])) // => 1
console.log(first([1,2,3], 2)) // => [1,2]
