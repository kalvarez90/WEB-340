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
path.set('view engine', 'ejs');
app.set(logger('short'));

//
app.get('/', function(req, res) {
  res.render('index', {
    title: 'Home Page'
  });
});

http.createServer(app).listen(8000, function() {
  console.log('Application started on port 8000');
})
