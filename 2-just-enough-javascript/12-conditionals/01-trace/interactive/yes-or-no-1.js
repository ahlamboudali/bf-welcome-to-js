// #todo

'use strict';
// Ask the user for confirmation and store the result in the variable didConfirm
let didConfirm = confirm('yes?');

let message;
if (didConfirm) {
  // Check if the user confirmed
  message = 'ok';
} else {
  // Set message to 'no' if the user did not confirm
  message = 'no';
}
// Display an alert with the message
alert(message);
