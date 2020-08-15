/*
============================================
; Title:  Alvarez-assignment-2.4.js
; Author: Professor Krasso
; Modified by: Karina Alvarez
; Date:   13 August 2020
; Description: Creates a Node.js server and returns
;              the index.ejs page
;===========================================
*/

//require statements
var http = require('http');
var express = require('express');
var path = require('path');

//initialize the application
var app = express();

// telling Express the views are in the 'views; directory
app.set('views', path.resolve(__dirname, 'views'));

// telling Express to use the EJS view engine
app.set('view engine', 'ejs');

// Returns index.ejs page
app.get('/', function(request, response) {
  response.render('index', {
    firstName: 'Karina',
    lastName: 'Alvarez',
    address: '1234 main street'
   });
});

// Creates a new server to listen on the port 3000
http.createServer(app).listen(3000, function() {
  console.log('EJS-Views app started on port ', 3000);
});
