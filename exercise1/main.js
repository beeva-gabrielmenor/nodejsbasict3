'use strict';

const eventEmitter = require('events');

const myEventEmitter = new eventEmitter();

function listener() {
	console.log('Coming...');
}

// TODO Write an interval that emits every second 'ringbell' event with 'ring ring' tone as parameter
setInterval(() => {
	myEventEmitter.emit('ringbell', 'ring ring');
}, 1000);

// TODO add an event listener with .on() method that listens 'ringbell' event and prints given tone
	console.log(tone);

//TODO: dd an event listener with .on() method that listens 'ringbell' event and calls listener method