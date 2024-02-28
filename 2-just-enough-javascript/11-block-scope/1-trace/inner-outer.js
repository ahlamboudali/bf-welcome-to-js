// #todo

'use strict';
// Declares a variable greeting and initializes it with the string 'hello'.
let greeting = 'hello';

// Assigns the value of newGreeting to the  variable greeting
{
  let newGreeting = 'bye';
  greeting = newGreeting;
}
//logs to the console.
console.log(greeting === 'bye');
