// Adjacency List
// a -> { a b }
// b -> { c }
// c -> { d }
// d -> { b c }

// [['a', ['a', 'b']]]

const graph = {
  a: ['a', 'b'],
  b: ['c'],
  c: ['d'],
  d: ['b', 'c']
};
// delete graph['c']
//
// graph['a']

