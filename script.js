var main = function (userInput) {
  // Input validation - Check if user input only scissors, paper or stone. Prompt users if required input is not found.
  if (
    !(
      userInput == "scissors" ||
      userInput == "paper" ||
      userInput == "stone" ||
      userInput == "reversed scissors" ||
      userInput == "reversed paper" ||
      userInput == "reversed stone"
    )
  ) {
    var myOutputValue = `Please type only "scissors", "paper" or "stone".`;
    return myOutputValue;
  }

  var gameWinner = generateWinner(userInput);
  return gameWinner;
};

// Generate random integer between 0 to 3, exlucing 3.
var pickRandomNumber = function () {
  var randomInteger = Math.floor(Math.random() * 3);
  console.log(`Random Integer is ${randomInteger}`);
  return randomInteger;
};

var pickOption = function () {
  // Generate the random integer to be used to select the item in the array
  var randomOptionNum = pickRandomNumber();

  // Set the output options in an array
  var optionsArray = ["scissors", "paper", "stone"];

  // Use the random integer to select the random item in the array
  var selectedOption = optionsArray[randomOptionNum];

  return selectedOption;
};

// ===== Function to check user input against program output to determine winner (game rules) based on original rules =====

var generateWinner = function (userInput) {
  // Generate random option of either scissors, paper or stone
  var outputByProgram = pickOption();

  // console.log(outputByProgram);

  if (
    userInput == outputByProgram ||
    (userInput == "reversed scissors" && outputByProgram == "scissors") ||
    (userInput == "reversed paper" && outputByProgram == "paper") ||
    (userInput == "reversed stone" && outputByProgram == "stone")
  ) {
    var myOutputValue = `The computer chose ${outputByProgram}. <br ><br > It's a draw! <br ><br > Now you can type "scissors" "paper" or "stone" to play another round!`;
    return myOutputValue;
  }

  if (
    (userInput == "scissors" && outputByProgram == "paper") ||
    (userInput == "paper" && outputByProgram == "stone") ||
    (userInput == "stone" && outputByProgram == "scissors") ||
    (userInput == "reversed scissors" && outputByProgram == "stone") ||
    (userInput == "reversed paper" && outputByProgram == "scissors") ||
    (userInput == "reversed stone" && outputByProgram == "paper")
  ) {
    var myOutputValue = `The computer chose ${outputByProgram}. <br ><br > You won! <br ><br > Now you can type "scissors" "paper" or "stone" to play another round!`;
    return myOutputValue;
  }

  if (
    (userInput == "scissors" && outputByProgram == "stone") ||
    (userInput == "paper" && outputByProgram == "scissors") ||
    (userInput == "stone" && outputByProgram == "paper") ||
    (userInput == "reversed scissors" && outputByProgram == "paper") ||
    (userInput == "reversed paper" && outputByProgram == "stone") ||
    (userInput == "reversed stone" && outputByProgram == "scissors")
  ) {
    var myOutputValue = `The computer chose ${outputByProgram}. <br ><br > You lose! <br ><br > Now you can type "scissors" "paper" or "stone" to play another round!`;
    return myOutputValue;
  }
};
