const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 6.3 - Mongoose"));
console.log ('\n');

/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   11 September 2020
; Modified by: Karina Alvarez
; Description: Demonstrates how to setup a MongoDB
;              connection.
;===========================================
*/

var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var logger = require('morgan');

// mLab connection
var mongoDB = "mongodb+srv://userName:user123@buwebdev-cluster-1.z53kv.mongodb.net/test";


mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;


var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connecting error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

//application
var app = express();
app.use(logger('dev'));

//server
http.createServer(app).listen(8000, function() {
  console.log('Application started on port 8000')
})
