/*
============================================
; Title:  alvarez-exercise-7.2.js
; Author: Professor Krasso
; Date:   15 September 2020
; Modified by: Karina Alvarez
; Description: Demonstrations how to create a TDD unit test.
;===========================================
*/

var assert = require("assert");

describe("String#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});
