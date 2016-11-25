'use strict';
var events = require('events'),
	eventEmitter = new events.EventEmitter();

module.exports = {
	on: (eventName, callback) => {
		eventEmitter.on(eventName, callback);
	},
	sendTweet : function (nickname, tweet) {
		console.log(nickname + " tweets: " + tweet);
		eventEmitter.emit('tweetSent', nickname, tweet);
	}
};