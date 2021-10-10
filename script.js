'use strict';

const inputField = document.getElementById('input-field');

var main = function (input) {
  var myOutputValue = input;
  return myOutputValue;
};

// add 'enter' function to input-field
inputField.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('submit-button').click();
  }
});

// random number generator
const randomNumberGen = function () {
  return Math.trunc(Math.random() * 3);
};

// computer's selection
const computerSelect = function () {
  let randomNumber = randomNumberGen();
  switch (randomNumber) {
    case 0:
      return 'scissors ✂';
      break;
    case 1:
      return 'paper 🧻';
      break;
    case 2:
      return 'stone 🥌';
      break;
  }
};
// console.log(computerSelect());

// get player choice

// game code
