const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 1.5 - Hello World"));
console.log ('\n');
/*
============================================
; Title:  alvarez-hello-world.js
; Author: Professor Krasso
; Date:   5 August 2020
; Modified by: Karina Alvarez
; Description: Demonstrates how to create 
; a Node.js server
;===========================================
*/

// Recreatig the Node.js Server Example with my own body message
const http = require('http');

function processRequest(req, res) {
  const body = 'Learning how to recreate the Node.js Server from example in exercise 1.5';

  const contentLength = body.length;

  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });

  res.end(body);
}

const s = http.createServer(processRequest);

s.listen(8080);