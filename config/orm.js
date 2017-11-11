var mysql = require("mysql");
var con = require("../config/connection.js");

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      };
      arr.push(key + "=" + value);
    };
  };
  return arr.toString();
};

var orm = {
	selectAll: function(table, callback){
		var querystring = "SELECT * FROM " + table + ";";
			con.query(querystring, function(err, result){
				if (err) { 
				   throw err;
			}
				callback(result);
			});
		},
	createOne: function(table, cols, vals, callback){
		var querystring = "INSERT INTO " + table;
				queryString += " (";
			    queryString += cols.toString();
			    queryString += ") VALUES (";
			    querystring += vals;
			    querystring += ") ";

			    console.log(querystring);
			    
			    con.query(querystring, function(err, result){
				if (err) {
					throw err;
					}
				callback(result);
			});
		},
	updateOne: function(table, colval, condition, callback){
		var querystring = "UPDATE " + table; 
				queryString += " SET ";
			    queryString += objToSql(colval);
			    queryString += " WHERE ";
			    queryString += condition;

			    console.log(querystring);

			    con.query(querystring, function(err, result){
			    	if (err) {
			    		throw err;
			    	}
			    	callback(result);
			    });

	}
};

module.exports = orm;
