const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 1.3 - Modules"));
console.log ('\n');
/*
============================================
; Title:  alvarez-module.js
; Author: Professor Krasso
; Date:   3 August 2020
; Modified by: Karina Alvarez
; Description: Demonstrates how to parse 
; a Node.js URL
;===========================================
*/

var url = require("url");

var parsedURL = url.parse("https://www.week-one-assignment.com/profile?name=karina.alvarez");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);