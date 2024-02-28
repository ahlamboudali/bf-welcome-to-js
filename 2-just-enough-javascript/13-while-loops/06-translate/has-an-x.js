// #todo

'use strict';

/* Has an "x"


  Data In:

  Data Out:

  Test Cases:

*/

/* ---  ?  --- */

// input <- null
// WHILE: input === null
// input <- prompt('enter something, the program will check if it has an "x"')
// :END WHILE

/* ---  ?  --- */

// IF: input.includes('x')
//  message <- message + 'has at least one "x"'
// ELSE:
//  message <- message + 'does not have a single "x"'
// :END IF

/* ---  ?  --- */

// alert(message)
let input = null;

while (input === null) {
  input = prompt('enter something, the program will check if it has an "x"');
}

let message = '';
// check if the input case insensitive has 'x'
const doesIncludesX = input.toLowerCase().includes('x');

if (doesIncludesX) {
  message += 'has at least one "x"';
} else {
  message += 'does not have a single "x"';
}

alert(message);
