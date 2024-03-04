// #todo

'use strict';

/*
  refactor this program so the I/O loop DOES NOT accept strings with duplicate characters
  hints:
    - one strategy is moving the `for-of` loop inside the I/O loop
    - you might want to try using a boolean flag for the I/O loop (or true/break/continue)

*/

let mayHaveDuplicates = null;
let hasDuplicates = false;

while (mayHaveDuplicates === null || hasDuplicates) {
  mayHaveDuplicates = prompt('Enter something with no duplicate characters');
  hasDuplicates = false;

  let seenCharacters = {};
  for (let char of mayHaveDuplicates) {
    if (seenCharacters[char]) {
      hasDuplicates = true;
      break;
    }
    seenCharacters[char] = true;
  }

  if (hasDuplicates) {
    alert('Input contains duplicate characters. Try again.');
  }
}

alert('Well done! No duplicate characters found.');
