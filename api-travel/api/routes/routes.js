// module.exports = function(app) {
// 	var todoList = require('../controllers/todocontroler.js');

// 	// todoList Routes
// 	app.route('/')
// 		.get(todoList.todocontroler)
// 		.post(todoList.create_a_task);


// };

var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);