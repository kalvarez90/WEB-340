const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 3.3 - Routing"));
console.log ('\n');
/*
============================================
; Title:  alvarez-exercise-3.3.js
; Author: Professor Krasso
; Date:   21 August 2020
: Modified by: Karina Alvarez
; Description: Demonstrates advanced routing
;===========================================
*/

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('short'));

app.get('/:employeeId', function(req, res) {
  var employeeId = parseInt(req.params.employeeId, 10);

  res.render('index', {
    employeeId: employeeId
  });
});

http.createServer(app).listen(8000, function() {
  console.log("Application started on port, ", 8000)
});
