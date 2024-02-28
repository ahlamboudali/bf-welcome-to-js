// #todo

'use strict';

let word = 'a';
// let word = 'be';
// let word = 'sea';
// let word = 'frog';
// let word = 'apple';
// let word = 'banana';

let message;
// Check if the word's length is less than or equal to 2
if (word.length <= 2) {
  // If the word is short (length <= 2), set the message accordingly
  message = 'a short word';
} else if (word.length < 3) {
  // This condition is logically unreachable because it's already covered by the first condition
  message = 'unreachable path!';
} else if (word.length < 5) {
  // If the word's length is less than 5 but greater than or equal to 3, set the message

  message = 'a perfect word';
} else {
  // If the word's length is 5 or greater, set the message accordingly

  message = 'a long word';
}

console.log(message); Output the message
