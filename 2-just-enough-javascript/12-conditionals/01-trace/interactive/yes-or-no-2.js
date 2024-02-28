// #todo

'use strict';
// Ask the user for confirmation and store the result in the variable didConfirm
let didConfirm = confirm('yes?');

let message;
// Check if the user did not confirm
if (didConfirm === false) {
  // Set message to 'no' if the user did not confirm
  message = 'no';
} else {
  // Set message to 'ok' if the user confirmed
  message = 'ok';
}
// Display an alert with the message
alert(message);
