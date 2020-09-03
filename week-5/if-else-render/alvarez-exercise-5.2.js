const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Assignment 5.2 - EJS Templates"));
console.log ('\n');
/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   3 September 2020
; Modified by: Karina Alvarez
; Description: Demonstrates EJS 'if-else-render' operations.
;===========================================
*/

var express = require('express');
var http = require('http');
var path = require('path');

// app
app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");


//array
var n = ["Karina", "Andrea", "Katherine", "Danielle"];

// routes
app.get("/", function(request, response) {
  response.render("index", {
    names: n
  });
});

//server
http.createServer(app).listen(3000, function() {
  console.log("Application started on port 3000!");
});
