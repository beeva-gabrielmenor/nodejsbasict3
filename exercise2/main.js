'use strict';

//TODO: Import tweeterMock module

var tweeterEmitter = require('./tweeterMock.js');


var tweeterListener = function (nickname, tweet) {
	return () => {
		//TODO add a setTimeout to show new tweets afte 3 seconds
		setTimeout(function() {
			console.log('New Tweet received from ' + nickname + ': ' + tweet);
		}, 3000);
		
  		
	}
}



var nickname = 'gabriel menor';
var tweet = 'buenas tardes';

if(!nickname && !tweet) {
	console.log("Usage: ");
	console.log("$> node main.js @peter hello");
	process.exit();
}

// TODO add a listener that listens 'tweetSent' Event from tweeterEmitter

tweeterEmitter.on('tweetSent',arg => {
	tweeterListener(arg.nickname, arg.tweet)()
  });
tweeterEmitter.sendTweet(nickname, tweet);
