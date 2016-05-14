// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// POST http://localhost:8080/api/users
// parameters sent with 
app.post('/api/users', function(req, res) {
	var user_id = req.headers.id;
	var token = req.headers.token;
	var geo = req.headers.geo
	console.log(req.headers.id);
	res.send(user_id + ' ' + token + ' ' + geo);
});

app.get('/api/testing', function(req, res) {
	console.log(req);
	res.send("wow good job");
});

app.post('/api/testing', function(req, res) {
	var myVar = req.headers.time;
	//insert_to_db(myVar
	res.send(myVar + 0198232);
});
// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

