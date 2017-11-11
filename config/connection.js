var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost", 
	user: "root",
	password: "root", 
	database: "burger_db"
});

module.exports = con;