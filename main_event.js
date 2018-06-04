/** Import evnts module **/
var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler
var connectHandler = function connected(){
  console.log('connection successfull.');
  eventEmitter.emit('data_received');
}

//Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

//Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
  console.log('data received successfuly.');
});

eventEmitter.emit('connection');

console.log('Program Ended.');
