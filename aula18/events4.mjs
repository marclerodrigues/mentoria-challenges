// [ event, fn ]
const handlers = [
  ['dream', () => console.log('I had a dream!')],
  ['make', () => console.log('Making!')],
  ['undo', () => console.log('Undoing!')],
];

const name = 'Marlce';

// ESM (ES2015 ou ES6)
export {
  handlers,
  name as onwerName,
};

export default handlers;
