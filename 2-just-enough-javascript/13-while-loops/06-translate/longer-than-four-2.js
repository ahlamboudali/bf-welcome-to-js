// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- ''

// prompting <- true

// WHILE: prompting
//   input <- prompt('enter something longer than 4 characters, or "cancel" to leave')
//   IF: input === null
//     prompting <- false
//     input <- 'you canceled'
//   ELSE: IF: input.length > 4
//     prompting <- false
//   :END IF
// :END WHILE

/* ---   ?   --- */

// alert(input)

let input = '';

while (true) {
  input = prompt(
    'enter something longer than 4 characters, or "cancel" to leave',
  );

  if (input === null) {
    input = 'you canceled';
    break;
  } else if (input.length > 4) {
    break;
  }
}

alert(input);
