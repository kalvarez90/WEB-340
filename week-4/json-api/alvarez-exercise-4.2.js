const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Assignment 4.2 - JSON API"));
console.log ('\n');
/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   24 August 2020
; Modified by: Karina Alvarez
; Description: Demonstrates how to return
; JSON from a Node.js server.
;===========================================
*/

var express = require('express');
var http = require('http');

var app = express();



app.get('/customer/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);

  res.json( {
    firstName: 'Karina',
    lastName: 'Alvarez',
    employeeId: id,
    title: 'Web Developer'
  });
});

http.createServer(app).listen(8000, function() {
  console.log('Application started on port, ', 8000);
});
