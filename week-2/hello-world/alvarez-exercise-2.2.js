/*
============================================
; Title:  alvarez-exercise-2.2.js
; Author: Professor Krasso
; Modified by: Karina Alvarez
; Date:   12 August 2020
; Description: Creates a new server and  listens
;              on port 8080.
;===========================================
*/

var express = require("express");
var http = require('http');

// calling express function
var app = express();

//placeholder for express app
app.use(function(request, response) {
    console.log('In come a request to: ' + request.url);
    response.end('Hello World\n');
})

// new server on port 8080
http.createServer(app).listen(8080, function() {
    console.log('Application started on port ', 8080);
});