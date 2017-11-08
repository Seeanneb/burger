var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost", 
	user: "root",
	password: "root", 
	database: "burger_db"
});

con.connect(function(err){
	if (err) throw err;
	var sql = "INSERT INTO burger (burger_name) VALUES ?";
	var values = [['Double-Double'], ['McGangbang'], ['Spicy Nugs']];
	con.query(sql, [values], function(err, result){
		if (err) throw err;
		console.log("number of records inserted " + result.affectedRows);
	});
});