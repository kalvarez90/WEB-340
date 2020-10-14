const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Assignment 5.4 - User Interface Development (EMS)"));
console.log ('\n');

/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   22 September 2020
; Modified by: Karina Alvarez
; Description: Server file for the ems application
;===========================================
*/

//required statements
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');
var helmet = require('helmet');
var csrf = require('csurf');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Employee = require('./models/employee');


//MongoDB Atlas
var mongoDB = 'mongodb+srv://userName:user123@buwebdev-cluster-1.z53kv.mongodb.net/ems';

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

// CSRF protection
var csrfProtection = csrf({ cookie: true });

// application
var app = express();

app.use(logger('short')); // morgan

// Body parser
app.use(bodyParser.urlencoded({
  extended: true
})
);
app.use(cookieParser()); // cookie parser
app.use(helmet.xssFilter()); // helmet
app.use(csrfProtection); // csrf

//Intercepting incoming request and adding CSRF token to the response
app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});


// View engine and view's directory path
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8000);

//index or home page
app.get('/', function(req, res) {
  res.render('index', {
    title: 'EMS | Home'
  });
});

// redirecting users to the 'new.js' file
app.get('/new', function(req, res) {
  res.render('new', {
    title: 'EMS | New'
  });
});

// redirection to list.ejs file
app.get('/list', function(req, res) {
  Employee.find({}, function(error, employees) {
    if(error)
      throw error;
      res.render('list', {
        title: 'EMS | List',
        employees: employees
    })
  });
});

// form submission
app.post('/process', function(req, res) {
  //console.log(req.body.txtName);
  if(!req.body.txtName) {
    res.status(400).send('Entry must have a name');
    return;
  //res.redirect('/');
  }

//get the request's form data
var employeeName = req.body.txtName;
console.log(employeeName);

var employeeLast = req.body.txtLast;
console.log(employeeLast);

//create an employee model
let employee = new Employee({
  firstName: employeeName,
  lastName: employeeLast
});

// save
employee.save(function(error) {
  if (error)
    throw error;
    console.log(employeeName + ' ' + employeeLast + ' saved successfully!');
     });
     res.redirect('/list');
});

//view page
app.get('/view/:queryName', function(req, res) {
  var queryName = req.params.queryName;

  Employee.find({'firstName': queryName}, function(error, employees) {
    if (error) throw error;
      console.log(employees);

      if (employees.length > 0) {
        res.render('view', {
          title: 'EMS | View',
          employee: employees
        })
      } else {
        res.redirect('/list');
      }
  });
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Application started on port 8000');
})
