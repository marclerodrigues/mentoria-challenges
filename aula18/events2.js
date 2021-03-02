// [ event, fn ]
const handlers = [
  ['dream', () => console.log('I had a dream!')],
  ['make', () => console.log('Making!')],
  ['undo', () => console.log('Undoing!')],
];

// module.exports = handlers;
// module.exports.name = 'Marcle';
// CommonJS
module.exports = {
  handlers,
  name: 'Marcle'
};
