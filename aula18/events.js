const events = require('events');
const emitter = new events.EventEmitter();
const { handlers, name } = require('./events2');

console.log(name);

handlers.forEach(([event, fn]) => {
  emitter.on(event, fn)
});

emitter.emit('dream');
emitter.emit('make');
emitter.emit('undo');
