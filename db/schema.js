var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost", 
	user: "root", 
	password: "root",
	database: "burger_db"
});


con.connect(function(err){

	if (err) throw err;
	con.query("CREATE DATABASE burger_db", function(err, result){
		if (err) throw err
			console.log("database created!")
	})
	var sql = "CREATE TABLE `burger_db`.`burger` ( `id` INT(10) NOT NULL AUTO_INCREMENT , `burger_name` VARCHAR(255) NOT NULL , `devoured` BOOLEAN NOT NULL , `date` TIMESTAMP NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB";
	con.query(sql, function(err, result){
		if (err) throw err;
		console.log("Table created!")
	});
});
