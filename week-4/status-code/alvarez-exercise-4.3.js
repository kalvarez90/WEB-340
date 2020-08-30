const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Assignment 4.3 - HTML Status Code"));
console.log ('\n');
/*
============================================
; Title: alvarez-exercise-4.3.js
; Author: Professor Krasso
; Date:   25 August 2020
; Modified by: Karina Alvarez
; Description: Demonstrates how to programmatically
; set Node.js status codes.
;===========================================
*/

//start of program
var express = require('express');
var http = require('http');

var app = express();


//401 unauthorized search error
app.get('/unauthorized', function(req, res) {
  res.status(401);
  res.json({
    message: 'Unauthorized search'
  });
});

//503 service unavailable error
app.get('/unavailable', function(req, res) {
  res.status(503);
  res.json({
    message: 'Service unavailable'
  });
});

//404 not found error
app.get('/not-found', function(req, res) {
  res.status(404);
  res.json({
    message: 'Page not found'
  });
});

//port and output
http.createServer(app).listen(3000, function() {
  console.log('Application started on port ', 3000)
});



