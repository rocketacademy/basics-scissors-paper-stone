var main = function (userInput) {
  // Input validation - Check if user input only scissors, paper or stone. Prompt users if required input is not found.
  if (
    !(userInput == "scissors" || userInput == "paper" || userInput == "stone")
  ) {
    var myOutputValue = `Please type only "scissors", "paper" or "stone"`;
    return myOutputValue;
  }
  // Generate random option of either scissors, paper or stone
  var outputByProgram = pickOption();

  // Check user input against program output to determine winner (game rules)
  if (userInput == outputByProgram) {
    var myOutputValue = `The computer chose ${outputByProgram}. <br ><br > It's a draw! <br ><br > Now you can type "scissors" "paper" or "stone" to play another round!`;
    return myOutputValue;
  }

  if (
    (userInput == "scissors" && outputByProgram == "paper") ||
    (userInput == "paper" && outputByProgram == "stone") ||
    (userInput == "stone" && outputByProgram == "scissors")
  ) {
    var myOutputValue = `The computer chose ${outputByProgram}. <br ><br > You won! <br ><br > Now you can type "scissors" "paper" or "stone" to play another round!`;
    return myOutputValue;
  }

  if (
    (userInput == "scissors" && outputByProgram == "stone") ||
    (userInput == "paper" && outputByProgram == "scissors") ||
    (userInput == "stone" && outputByProgram == "paper")
  ) {
    var myOutputValue = `The computer chose ${outputByProgram}. <br ><br > You lose! <br ><br > Now you can type "scissors" "paper" or "stone" to play another round!`;
    return myOutputValue;
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
