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
var mongoose = require('mongoose');

var Employee = require('./models/employee');

//MongoDB Atlas
var mongoDB = 'mongodb+srv://userName:user123@buwebdev-cluster-1.z53kv.mongodb.net/test';

//Connection
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function() {
  console.log('Application connected to mLab MongoDB instance');
});

// application
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set(logger('dev'));

//create an employee model
var employee = new Employee({
  firstName: 'Patrick',
  lastName: 'Rockwell'
});

//index or home page
app.get('/', function(req, res) {
  res.render('index', {
    title: 'EMS'
  });
});


http.createServer(app).listen(8000, function() {
  console.log('Application started on port 8000');
})
