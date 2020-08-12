var express = require('express');
var http = require('http');

var app = express();

//routes
app.get('/', function(request, response) {
  response.end('Welcome to the homepage!\n');
});

app.get('/about', function(request, response) {
  response.end('Welcome to the about page!\n');
});

app.get('/contact', function(request, response) {
  response.end('Welcome to the contact page!\n');
});

app.use(function(request, response) {
  response.statusCode = 404;
  response.end('404!\n');
});

http.createServer(app).listen(3000, function () {
  console.log('Application started on port ', 3000);
});
