// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// message <- 'your favorite color is '

// unconfirmed <- true

// WHILE: unconfirmed
//   input <- prompt('what is your favorite color?')
//   IF: input === null
//     alert('there is no escape')
//   ELSE:
/* ---   ?   --- */
//     confirmed <- confirm('is this correct? "' + input + '"')
//     IF: confirmed === true
//       message <- message + input
//       unconfirmed <- false
//     :END IF
//   :END IF
// :END WHILE

/* ---   ?   --- */

// alert(message)

let message = 'your favorite color is ';

while (true) {
  const input = prompt('what is your favorite color? ');

  if (input === null) {
    alert('there is no escape');
    continue;
  } else {
    const isFavoriteColor = confirm(`is this correct? "${input}"`);

    if (isFavoriteColor) {
      message += input;
      break;
    } else {
      alert('no, then enter your favorite color.');
      continue;
    }
  }
}

alert(message);
