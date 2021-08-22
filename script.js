var main = function (input) {
  var outputByProgram = pickOption();
  var myOutputValue = `The random option selected by the program is ${outputByProgram}.`;
  return myOutputValue;
};

// Set the game options into an array
var optionsArray = ["scissors", "paper", "stone"];

// Generate random integer between 0 to 2.

var pickRandomNumber = function () {
  // Generate random decimal between 0 to 3, excluding 3.
  var randomDecimal = Math.random() * 3;

  // Generate random integer between 0 to 3, exlucing 3.
  var randomInteger = Math.floor(randomDecimal);

  return randomInteger;
};

var pickOption = function () {
  // Generate the random integer to be used to select the item in the array
  var randomOptionNum = pickRandomNumber();

  // Use the random integer to select the random item in the array
  var selectedOption = optionsArray[randomOptionNum];

  return selectedOption;
};
