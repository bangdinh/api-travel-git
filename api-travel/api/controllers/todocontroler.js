'use strict';

var con = mysql.createConnection({
  host: "118.69.164.56",
  user: "bangdx",
  password: "Ftel@123!@",
  database: "TRAVEL_UTC2"
});

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
