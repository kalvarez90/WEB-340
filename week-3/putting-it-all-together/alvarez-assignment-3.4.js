const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Assignment 3.4 - Putting it all together"));
console.log ('\n');
/*
============================================
; Title:  alvarez-assignment-3.4.js
; Author: Professor Krasso
; Date:   22 August 2020
; Modified by: Karina Alvarez
; Description: Base server configurations for
; a fully working Express application.
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
    message: 'home page'
  })
});

app.get('/about', function(request, response) {
  response.render('about', {
    message:'about page'
  });
});

app.get('/contact', function(request, response) {
  response.render('contact', {
    message: 'contact page'
  });
});

app.get('/products', function(request, response) {
  response.render('products', {
    message: 'products page'
  });
});

http.createServer(app).listen(3000, function() {
  console.log('Application started on port, ', 3000)
});
// end of program
