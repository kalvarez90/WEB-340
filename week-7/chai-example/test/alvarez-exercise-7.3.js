const header = require('../alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 7.3 - Mocha and Chai"));
console.log ('\n');

/*
============================================
; Title:  fruits.js
; Author: Professor Krasso
; Date:   15 September 2020
; Modified by: Karina Alvarez
; Description: Demonstrates how to create a Chai test.
;===========================================
*/

var fruits = require('../alvarez-fruits');

var chai = require('chai');
var assert = chai.assert;

describe('fruits', function() {
  it('should return an array of fruits', function() {
    var f = fruits('Banana, Watermelon, Mango');
    assert(Array.isArray(f));
  });
});




