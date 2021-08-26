var numOfTimesUserWon = 0;
var numOfTimesPcWon = 0;

var main = function (userInput) {
  // Input validation - Prompt users if required input is not found.
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
    var myOutputValue = `Please type only "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone". Try again!`;
    return myOutputValue;
  }

  var gameWinner = generateWinner(userInput);
  return gameWinner;
};

// ===== Function to generate random integer between 0 to 3, exlucing 3.
var pickRandomNumber = function () {
  var randomInteger = Math.floor(Math.random() * 3);
  console.log(`Random Integer is ${randomInteger}`);
  return randomInteger;
};

// ===== Function to pick an option of either scissors, paper or stone
var pickOption = function () {
  var randomOptionNum = pickRandomNumber(); // Generate the random integer to be used to select the item in the array
  // Alternative way to random pick an option
  // var optionsArray = ["scissors", "paper", "stone"]; // Set the output options in an array
  // var selectedOption = optionsArray[randomOptionNum]; // Use the random integer to select the random item in the array
  if (randomOptionNum == 0) {
    selectedOption = "scissors";
  }

  if (randomOptionNum == 1) {
    selectedOption = "paper";
  }

  if (randomOptionNum == 2) {
    selectedOption = "stone";
  }

  return selectedOption;
};

// ===== Function to check user input against program output to determine winner (game rules) based on original rules =====

var generateWinner = function (userInput) {
  var outputByProgram = pickOption(); // Generate random option of either scissors, paper or stone
  var myOutputValue = `You lose!`;

  // console.log(outputByProgram);

  if (
    userInput == outputByProgram ||
    (userInput == "reversed scissors" && outputByProgram == "scissors") ||
    (userInput == "reversed paper" && outputByProgram == "paper") ||
    (userInput == "reversed stone" && outputByProgram == "stone")
  ) {
    var myOutputValue = `The computer chose ${outputByProgram}. <br ><br > It's a draw! <br ><br > Now you can type "scissors" "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to play another round!<br ><br >You won ${numOfTimesUserWon} times!<br ><br >The computer won ${numOfTimesPcWon} times!`;
  }

  if (
    (userInput == "scissors" && outputByProgram == "paper") ||
    (userInput == "paper" && outputByProgram == "stone") ||
    (userInput == "stone" && outputByProgram == "scissors") ||
    (userInput == "reversed scissors" && outputByProgram == "stone") ||
    (userInput == "reversed paper" && outputByProgram == "scissors") ||
    (userInput == "reversed stone" && outputByProgram == "paper")
  ) {
    numOfTimesUserWon = numOfTimesUserWon + 1;
    var myOutputValue = `The computer chose ${outputByProgram}. <br ><br > You won! <br ><br > Now you can type "scissors" "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to play another round!<br ><br >You won ${numOfTimesUserWon} times!<br ><br >The computer won ${numOfTimesPcWon} times!`;
  }

  if (
    (userInput == "scissors" && outputByProgram == "stone") ||
    (userInput == "paper" && outputByProgram == "scissors") ||
    (userInput == "stone" && outputByProgram == "paper") ||
    (userInput == "reversed scissors" && outputByProgram == "paper") ||
    (userInput == "reversed paper" && outputByProgram == "stone") ||
    (userInput == "reversed stone" && outputByProgram == "scissors")
  ) {
    numOfTimesPcWon = numOfTimesPcWon + 1;
    var myOutputValue = `The computer chose ${outputByProgram}. <br ><br > You lose! <br ><br > Now you can type "scissors" "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to play another round!<br ><br >You won ${numOfTimesUserWon} times!<br ><br >The computer won ${numOfTimesPcWon} times!`;
  }
  return myOutputValue;
};
