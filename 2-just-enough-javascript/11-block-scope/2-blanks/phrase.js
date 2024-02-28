// #todo

'use strict';

// Initialize an empty string variable named `phrase`

let phrase = '';

{
  // Enter a block scope
  // Declare a block-scoped variable named `word` and initialize it with 'hello'
  let word = 'hello';

  // Concatenate the value of `word` to the `phrase`
  phrase = phrase + word;
}

{
  // Declare another block-scoped variable named `word` and initialize it with 'world'
  let word = 'world';
  // Concatenate a space and the value of `word` to the `phrase`
  phrase = phrase + ' ' + word;
}

// Check if the `phrase` is equal to 'hello world' and log the result to the console
console.log(phrase === 'hello world'); // true

/* distractors:

  hello

  world

*/
