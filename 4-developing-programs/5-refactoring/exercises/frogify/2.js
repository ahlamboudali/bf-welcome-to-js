// #todo

'use strict';

/*
  refactor this program so it uses a `while` loop instead of a `for-of` loop
*/

let toBeFrogged = null;

while (toBeFrogged === null) {
  toBeFrogged = prompt(
    'Enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"',
  );

  let frogged = '';
  let index = 0;

  while (index < toBeFrogged.length) {
    const character = toBeFrogged[index];
    if (character === 'f') {
      frogged = frogged + 'frog';
    } else if (character === 'F') {
      frogged = frogged + 'FROG';
    } else {
      frogged = frogged + character;
    }
    index++;
  }

  alert(frogged);
}
alert(frogged);
