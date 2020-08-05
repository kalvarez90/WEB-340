const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 1.3 - Modules"));
console.log ('\n');
/*
============================================
; Title:  hello-world.js
; Author: Professor Krasso
; Date:   5 August 2020
; Modified by: Karina Alvarez
; Description: Demonstrates how to create 
; a Node.js server
;===========================================
*/

const http = require('http');

function processRequest(req, res) {
  const body = 'Recreating the Node.js Server Example';

  const contentLength = body.length;

  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });

  res.end(body);
}

const s = http.createServer(processRequest);

s.listen(8080);