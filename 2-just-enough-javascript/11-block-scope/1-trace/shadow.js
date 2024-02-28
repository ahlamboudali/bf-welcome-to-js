// #todo

'use strict';

// Initialize a global variable `greeting` with the value 'hello'

let greeting = 'hello';

{
  // Initialize a block-scoped variable `greeting` with the value 'hello'
  let greeting = 'hello';

  // Change the value of the block-scoped variable `greeting` to 'bye'
  greeting = 'bye';
  console.log(greeting);
}
//logs to the console.
console.log(greeting === 'hello'); // true
