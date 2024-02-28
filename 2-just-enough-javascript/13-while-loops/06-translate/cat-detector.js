// #todo

'use strict';

/* Cat Detector


  Data In:

  Data Out:

  Test Cases:


*/

/* --- ? --- */

// input <- null

// WHILE: input === null
//   input <- prompt('please enter "cat"')
// :END WHILE

/* --- ? --- */

// message <- ''

// IF: input !== 'cat'
//   message <- '"' + input + '" is not a cat'
// ELSE:
//   message <- 'thank you for the cat'
// :END IF

/* --- ? --- */

// alert(message)

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}

let output = '';
if (input !== 'cat') {
  output = `"${input}" is not a cat`;
} else {
  output = 'thank you for the cat';
}
alert(output);
