'use strict';

/*
  SecretPhraseGame:
    - Represents a simple game where the user tries to recall a secret phrase.
    - The game prompts the user to enter three secret phrases and then recalls one of them randomly.
*/

// Welcome message explaining the game to the user
alert(
  'Welcome to Remembery, the game of remembering!\n\n' +
  'You will be prompted to enter 3 secret phrases.\n' +
  'Later, you will be asked to remember one of them.\n\n' +
  'If you enter it exactly, you win!'
);

// Prompt the user to enter three secret phrases
let secretPhrase1 = prompt('Enter your first secret phrase:');
let secretPhrase2 = prompt('Enter your second secret phrase:');
let secretPhrase3 = prompt('Enter your third secret phrase:');

// Notify the user that all phrases are saved and get ready to remember
alert('All phrases saved! Get ready to remember.');

// Generate a random number (0, 1, or 2) to determine which phrase the user needs to recall
let randomIndex = Math.floor(Math.random() * 3);

// Retrieve the secret phrase corresponding to the random index
let correctPhrase = '';
if (randomIndex === 0) {
  correctPhrase = secretPhrase1;
} else if (randomIndex === 1) {
  correctPhrase = secretPhrase2;
} else if (randomIndex === 2) {
  correctPhrase = secretPhrase3;
}

// Prompt the user to recall the phrase associated with the randomly generated index
let userGuess = prompt('Enter phrase number ' + (randomIndex + 1) + ':');

// Check if the user's input matches the correct secret phrase
if (userGuess === correctPhrase) {
  alert('Correct! Phrase ' + (randomIndex + 1) + ' was "' + correctPhrase + '".');
} else {
  alert('Nope :(');
}