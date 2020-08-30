const header = require('./alvarez-header.js');
const { response } = require('express');

console.log(header.display("Karina", "Alvarez", "Assignment 4.4 - cURL"));
console.log ('\n');
/*
============================================
; Title:  alvarez-assignment-4.4.js
; Author: Professor Krasso
; Date:   30 August 2020
; Modified by: Karina Alvarez
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

//start of program
var express = require('express');
var http = require('http');

var app = express();

// cURL get request
app.get('/', function(request, response) {
  response.send('This is an HTTP GET request');
});

//cURL post request
app.post('/', function(request, response) {
  response.send('This is an HTTP POST request');
});

//cURL put request
app.put('/', function(request, response) {
  response.send('This is an HTTP PUT request');
});

//cURL delete request
app.delete('/', function(request, response) {
  response.send('API invoked ad an HTTP DELETE request');
});


http.createServer(app).listen(3000, function() {
  console.log('Application started on port 3000');
});
//end of program
