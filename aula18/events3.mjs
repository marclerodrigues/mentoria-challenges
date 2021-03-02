import events from 'events'
import { handlers, onwerName } from './events4.mjs';
// import handlers from './events4.mjs';

const emitter = new events.EventEmitter();

console.log(onwerName);

handlers.forEach(([event, fn]) => {
  emitter.on(event, fn)
});

emitter.emit('dream');
emitter.emit('make');
emitter.emit('undo');
