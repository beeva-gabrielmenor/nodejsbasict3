'use strict';

//TODO: Import tweeterMock module
var tweeterEmitter = require('./tweeterMock');

var tweeterListener = function (nickname, tweet) {
	return () => {
		//TODO add a setTimeout to show new tweets afte 3 seconds
  		console.log('New Tweet recevied from ' + nickname + ': ' + tweet);
	}
}

var nickname = process.argv[2];
var tweet = process.argv[3];
if(!nickname && !tweet) {
	console.log("Usage: ");
	console.log("$> node main.js @peter hello");
	process.exit();
}

// TODO add a listener that listens 'tweetSent' Event from tweeterEmitter
tweeterEmitter.on('tweetSent', tweeterListener(nickname, tweet));

tweeterEmitter.sendTweet(nickname, tweet);