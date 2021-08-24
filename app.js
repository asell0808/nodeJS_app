//var faker = require('faker');
//var mysql = require('mysql');

//var connection = mysql.createConnection({
	//host: 'localhost',
	//user: 'root',
	//database: 'join_us'
//});

//var q = 'SELECT CURDATE()';

//var q = 'SELECT COUNT(*) AS total FROM users ';

//connection.query(q, function(error, results,fields){
//	if(error) throw error;
//	console.log(results[0].total);
//});

//connection.end();

//console.log(faker.internet.email());

//console.log(faker.date.past());

//function generateAddress(){
//	console.log(faker.address.streetAddress());
//	console.log(faker.address.city());
//	console.log(faker.address.state());
//}

//for(i = 0; i < 500; i++){
//	console.log('Hello, world!');
//}

//for(i = 0; i < 500; i++){
//	console.log('Hello, world!');
//}

//console.log('Hello, world!');
//---------------------------------------
// run the line below in the command line 
// node section16NodeJS/app.js

// SQL
// CREATE TABLE users(email VARCHAR(255) PRIMARY KEY, created_at TIMESTAMP DEFAULT NOW());
// mysql-ctl cli
// use join_us;
// INSERT INTO users(email) VALUES ('Katie34@yahoo.com'), ('Tunde@gmail.com');

var mysql = require('mysql');
var faker = require('faker');
 
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});
 
 
var data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
 
 
var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});
 
connection.end();
