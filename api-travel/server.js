// var mysql = require('mysql');
// var express = require('express');
// var app = express();


// // app.use(function(req, res) {
// //   res.status(404).send({url: req.originalUrl + ' not found'})
// // });



// // // var con = require('./api/models/todomodel.js')


// // var mysql = require('mysql');
// // var con =  mysql.createConnection({
// //   host: "118.69.164.56",
// //   user: "bangdx",
// //   password: "Ftel@123!@",
// //   database: "TRAVEL_UTC2"
// // });


// app.get('/', function (req, res) {
//   var sql = "SELECT * FROM l100";
//   con.query(sql, function(err, results) {
//     if (err) throw err;
//     console.log(results);
//     res.json(results);
//   });
// });

// app.listen(3000,function(){
//     console.log('Node server running @ http://localhost:3000')
// });

var mysql = require('mysql');
var express = require('express');
var app = express();
app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});
var con = mysql.createConnection({
  host: "118.69.164.56",
  user: "bangdx",
  password: "Ftel@123!@",
  database: "TRAVEL_UTC2"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!!")
});

app.get('/', function (req, res) {
  var sql = "SELECT * FROM l100";
  res.json(sql);
  // con.query(sql, function(err, results) {
  //   if (err) throw err;
  //   res.json(results);
  // });
});

