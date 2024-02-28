// #todo

'use strict';
// Prompt the user to enter something with "ear" in it and store the input in the variable input
let input = prompt('enter something with "ear" in it');

let message;
// Check if the input is not null
if (input !== null) {
  // Check if the input contains the substring 'ear'
  if (input.includes('ear')) {
    // Set message to 'eary!' if the input contains 'ear'
    message = 'eary!';
  } else {
    // Set message to 'not eary :(' if the input does not contain 'ear'

    message = 'not eary :(';
  }
} else {
  // Set message to 'you canceled' if the user clicked cancel

  message = 'you canceled';
}

// Display an alert with the message
alert(message);
