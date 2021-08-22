var main = function (userInput) {
  // Input validation - Check if user input only scissors, paper or stone. Prompt users if required input is not found.
  if (
    !(userInput == "scissors" || userInput == "paper" || userInput == "stone")
  ) {
    var myOutputValue = `Please input only scissors, paper or stone`;
    return myOutputValue;
  }
  // Generate random option of either scissors, paper or stone
  var outputByProgram = pickOption();

  var myOutputValueWin = `The computer chose ${outputByProgram}. You won!`;
  var myOutputValueLose = `The computer chose ${outputByProgram}. You lose!`;

  // Check user input against program output to determine winner (game rules)
  if (userInput == outputByProgram) {
    var myOutputValue = `The computer chose ${outputByProgram}. It's a draw!`;
    return myOutputValue;
  }

  if (userInput == "scissors" && outputByProgram == "paper") {
    return myOutputValueWin;
  }

  if (userInput == "scissors" && outputByProgram == "stone") {
    return myOutputValueLose;
  }

  if (userInput == "paper" && outputByProgram == "scissors") {
    return myOutputValueLose;
  }

  if (userInput == "paper" && outputByProgram == "stone") {
    return myOutputValueWin;
  }

  if (userInput == "stone" && outputByProgram == "scissors") {
    return myOutputValueWin;
  }

  if (userInput == "stone" && outputByProgram == "paper") {
    return myOutputValueLose;
  }
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
