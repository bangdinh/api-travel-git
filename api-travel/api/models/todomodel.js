'use strict';
var mysql = require('mysql');
var con =  mysql.createConnection({
  host: "118.69.164.56",
  user: "bangdx",
  password: "Ftel@123!@",
  database: "TRAVEL_UTC2"
});

module.exports = con.query('select * from l100', function(err, results) {
    if (err) throw err;
    return results;
});