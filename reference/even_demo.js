const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');


// Create new objects -> emiter object has two main methods emit and on
// on -> is used to subscribe to particular event, it receives an arbitrary samowolną event name (newNumber) 
// and callback function that will be executed when the event occurs
let emitter = new EventEmitter();

emitter.on('newNumber', n=> console.log(n*2));
for (let i=0; i<10; i++){
    emitter.emit('newNumber', i);
}

// loop with setImmediate
emitter.on('newNumber', n=> setImmediate(() => console.log(n*2)));
for (let i=0; i<10; i++){
    emitter.emit('newNumber', i)
};