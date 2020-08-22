const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 3.2 - Logging"));
console.log ('\n');

/*
============================================
; Title: alvarez-exercise-3.2.js
; Author: Professor Krasso
; Date:   20 August 2020
; Modified by: Karina Alvarez
; Description: Demonstrates how to configure the
;              Morgan logger
;===========================================
*/

//start of program
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan')

var app = express();

// telling Express to check on views directory
app.set('views', path.resolve(__dirname, 'views'));

//telling Express to use EJS view engine
app.set('view engine', 'ejs');

app.use(logger('short'));

app.get('/', function(require, response) {
  response.render('index', {
    message: 'Learning Morgan Logger - Exercise 3.2'
  })
});

http.createServer(app).listen(3000, function() {
  console.log('Application started on port,', 3000)
})
//end of program
