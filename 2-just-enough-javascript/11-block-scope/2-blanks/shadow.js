// #todo

'use strict';
// Declare a global variable `greeting` and initialize it with the string 'hello'

let greeting = 'hello';

{
  // Declare a block-scoped variable `greeting` and initialize it with the string 'hello'

  let greeting = 'hello';

  // Reassign the value of the block-scoped variable `greeting` to 'bye'

  greeting = 'bye';

  // Log the value of the block-scoped variable `greeting` ('bye') to the console

  console.log(greeting);
}

// Check if the global variable `greeting` is equal to 'hello'

console.log(greeting === 'hello'); // true

/* distractors:


    Log

  Console



*/
