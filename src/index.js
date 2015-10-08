var express = require('express');
var app = express();
var redis = require("redis");

var client = redis.createClient('6379', 'redis');

app.get('/', function (req, res) {
	client.incr('counter', function(err, counter){
		if(err) return next(err);
		res.send("This page has been viewed" + counter + " times!");
	});
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});