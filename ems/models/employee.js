const header = require('../alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Assignment 7.4 - Mongoose Schema and Model Development"));
console.log ('\n');
/*
============================================
; Title:  employee.js
; Author: Professor Krasso
; Date:   16 September 2020
; Modify by: Karina Alvarez
; Description: File for the employee database model
;===========================================
*/

//require
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Employee Schema
let employeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true}
});

// define employee model
var Employee = mongoose.model('Employee', employeeSchema);

//Exports the employee to calling files
module.exports = Employee;


