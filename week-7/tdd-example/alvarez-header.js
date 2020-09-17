const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 7.2 - TDD in action"));
console.log ('\n');
/*
============================================
; Title:  alvarez-header.js
; Author: Professor Krasso
; Date:   15 September 2020
; Modified by: Karina Alvarez
; Description: Displays a formatted header
;===========================================
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns a well-formatted string header
 */
exports.display = function (firstName, lastName, assignment) {
  let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
    new Date().toLocaleDateString()

  return output
}
