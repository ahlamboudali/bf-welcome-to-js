// #todo

'use strict';

let word = '';
// let word = 'a';
// let word = 'be';
// let word = 'eat';
// let word = 'ear';
// let word = 'peat';
// let word = 'bear';
// let word = 'early';
// let word = 'burly';
// let word = 'pearly';
// let word = 'poultry';

let message;
// Check if the word's length is greater than or equal to 3
if (word.length >= 3) {
  // If the word's length is at least 3, check if it includes the substring 'ear'
  if (word.includes('ear')) {
    // If 'ear' is found in the word, set the message to 'eary word!'
    message = 'eary word!';
  } else {
    // If 'ear' is not found in the word, set the message to 'not eary :('
    message = 'not eary :(';
  }
} else {
  // If the word's length is less than 3, set the message to 'word is too short'

  message = 'word is too short';
}

console.log(message); // Output the message
