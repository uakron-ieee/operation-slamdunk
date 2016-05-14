// grab the packages we need
var express = require('express');
var mysql = require('mysql');
var app = express();
var port = process.env.PORT || 8080;


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var con = mysql.createConnection({
	host: "stoh.io",
	user: "fashionksu",
	password: "lollipop123",
	database: "slamdunk"
});



con.connect(function(err){
	 if(err){
		 console.log('error connecting to database');
			return;
	}
	else
	console.log('connect established');
});

app.post('/api/testing', function(req, res) {
	var myVar = req.headers.time;
	//insert_to_db(myVar
	res.send(myVar + 0198232);
});


app.post('/api/report/', function(req, res) {

	var report_data = [];
	var inc_direction = req.headers.direction;
	var inc_lot = req.headers.lot;
	var inc_time = req.headers.time;
	report_data.push({direction: inc_direction, lot: inc_lot, time: inc_time});
	console.log(report_data);
	con.query('INSERT INTO log SET ?', report_data, function(err,res){
		if(err) throw err;
		console.log('last insert id:', res.insertId);
	});
	// take the request, store each parameter in variable
	// insert statement to DB
	// halfsql, halfnode
	res.send("200");
});

app.post('/api/get_lot_info/', function(req, res) {
	// take request give back number of open parking spaces for a specific lot
	// sql code to do calculation
	// total_spaces-(initial_cars+in-out) = number of empty spaces
	// return num empty spaces
	res.send(empty_spots);
});
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


// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
