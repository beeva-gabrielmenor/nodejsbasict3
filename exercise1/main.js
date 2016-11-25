'use strict';

const eventEmitter = require('events');

const myEventEmitter = new eventEmitter();

function listenerOne () {
	console.log('Comming...');
}

function listenerTwo () {
	console.log('I\'m comming you bastards...');
}

// TODO Write an interval that emits every seconds 'ringbell' event with 'ring ring' tone as parameter
setInterval(() => {
	myEventEmitter.emit('ringbell', 'ring ring');
}, 1000);

// TODO add an event listener with .on() method that listens 'ringbell' event and prints given tone
myEventEmitter.on('ringbell', (tone) => {
	console.log(tone);
});

myEventEmitter.addListener('ringbell', listenerOne);

setTimeout(() => {
	//TODO remove listenerOne
	myEventEmitter.removeListener('ringbell', listenerOne);
}, 1500);

let messages = ['I\'m comming you bastards...', 'Get the fuck out of here'];
let times = 0;
myEventEmitter.on('removeListener', () => {
	//console.log(messages);
	console.log(times);
	if (times < messages.length) {
		myEventEmitter.once('ringbell', () => console.log(messages[times]));
		times++;
	} else {
		process.exit();
	}
})