var main = function (input) {
  // Input validation - Check if user input only scissors, paper or stone. Prompt users if required input is not found.
  if (!(input == "scissors" || input == "paper" || input == "stone")) {
    var myOutputValue = `Please input only scissors, paper or stone`;
    return myOutputValue;
  }
  // Generate random option of either scissors, paper or stone
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
  console.log(`Random Decimal is ${randomDecimal}`);

  // Generate random integer between 0 to 3, exlucing 3.
  var randomInteger = Math.floor(randomDecimal);
  console.log(`Random Integer is ${randomInteger}`);

  return randomInteger;
};

var pickOption = function () {
  // Generate the random integer to be used to select the item in the array
  var randomOptionNum = pickRandomNumber();

  // Use the random integer to select the random item in the array
  var selectedOption = optionsArray[randomOptionNum];

  return selectedOption;
};
