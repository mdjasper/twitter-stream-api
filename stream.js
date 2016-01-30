var Twitter = require('twitter'),
    fs = require('fs'),
    save = require('./saveTweet.js'),
    client = new Twitter({
    });

client.stream('statuses/filter', {track: 'clinton, trump'},  function(stream){
    stream.on('data', function(tweet) {
        save(tweet);
    });

    stream.on('error', function(error) {
        console.log(error);
    });
});