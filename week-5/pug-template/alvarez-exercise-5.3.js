const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Assignment 5.2 - EJS Templates"));
console.log ('\n');
/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   3 September 2020
; Modified by: Karina Alvarez
; Description: Demonstrates the Pug view engine.
;===========================================
*/

//require
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');


//app
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

//routes
app.get('/', function(req, res) {
  res.render('index', {
    message: 'To do a great right, do a little wrong. - William Shakespeare'
  });
});

//port
http.createServer(app).listen(8000, function() {
  console.log('Application started on port 8000');
});
