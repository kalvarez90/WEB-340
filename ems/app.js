const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Assignment 5.4 - User Interface Development (EMS)"));
console.log ('\n');

/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   4 September 2020
; Modified by: Karina Alvarez
; Description: Server file for the fms application
;===========================================
*/

//required statements
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');


// app
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set(logger('short'));

//index or home page
app.get('/', function(req, res) {
  res.render('index', {
    title: 'EMS'
  });
});

http.createServer(app).listen(8000, function() {
  console.log('Application started on port 8000');
})
