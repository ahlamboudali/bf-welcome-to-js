// #todo

'use strict';
// Initialize the variable 'phrase' with an empty string
let phrase = '';

// Declare a block-scoped variable 'word' and initialize it with the string 'hello'
{
  let word = 'hello';
  // Concatenate the value of 'word' to the 'phrase' variable

  phrase = phrase + word;
}

{
  // Declare another variable 'word' and initialize it with the string 'world'

  let word = 'world';
  // Concatenate a space and the value of 'word' to the 'phrase' variable
  phrase = phrase + ' ' + word;
}
// Check if the value of 'phrase' is equal to 'hello world' and log the result
console.log(phrase === 'hello world'); // true
