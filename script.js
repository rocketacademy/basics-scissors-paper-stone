// ----- Rules of game-----
// Scissors beats paper
// Paper beats stone
// Stone beats scissors

// User input: scissors, paper or stone
//
// Process:
// - generate random number between 1 and 3
// - correspond the number to computer's choice: scissors, paper or stone
// - compare the user's and computer's choice to determine winner
//
// Output: result of game (Win, Lose or Draw)

// ----------------------------------------------
// --------------- start of code! ---------------
// ----------------------------------------------

// Create variables for formatted choices

var scissorsFormatted = "Scissors ✂️";
var paperFormatted = "Paper 📄";
var stoneFormatted = "Stone 🪨";

// Helper functions here

var getRandomNumber = function () {
  // generate random decimal from 0 to 3 (inclusive of 0, exclusive of 3)
  var randomDecimal = Math.random() * 3;
  // convert decimal into whole number and ensure it's between 1 and 3 (inclusive of 1 and 3)
  var randomNumber = Math.floor(randomDecimal) + 1;
  return randomNumber;
};

var getComputerChoice = function () {
  // create variable for computer's choice
  var computerChoice = 0;

  // set computer's choice based on random number generated
  var choiceNum = getRandomNumber();
  if (choiceNum == 1) {
    computerChoice = "scissors";
  }
  if (choiceNum == 2) {
    computerChoice = "paper";
  }
  if (choiceNum == 3) {
    computerChoice = "stone";
  }

  // return computer's choice
  console.log("Random number generated: ", choiceNum);
  console.log("Computer's choice: ", computerChoice);

  return computerChoice;
};

// create function to determine if user won for normal & reversed gameplays
var didUserWin = function (userChoice, comChoice) {
  if (
    (userChoice == "scissors" && comChoice == "paper") ||
    (userChoice == "paper" && comChoice == "stone") ||
    (userChoice == "stone" && comChoice == "scissors")
  ) {
    return true;
  }
  return false;
};

var didUserWinReversed = function (userChoice, comChoice) {
  if (
    (userChoice == "reversed scissors" && comChoice == "stone") ||
    (userChoice == "reversed paper" && comChoice == "scissors") ||
    (userChoice == "reversed stone" && comChoice == "paper")
  ) {
    return true;
  }
  return false;
};

// create function to output results
var determineResult = function (userChoice, comChoice) {
  var result = 0;

  // determine if gameplay is normal or reversed
  var reversedGameplay = userChoice.includes("reversed");

  // ----- Reversed gameplay -----
  if (reversedGameplay) {
    console.log("Gameplay mode: REVERSED!");
    // Draw:
    if (
      (userChoice == "reversed scissors" && comChoice == "scissors") ||
      (userChoice == "reversed paper" && comChoice == "paper") ||
      (userChoice == "reversed stone" && comChoice == "stone")
    ) {
      result = "It's a draw";
    }

    // Win:
    else if (didUserWinReversed(userChoice, comChoice)) {
      result = "You win at reversed 'Scissors, Paper, Stone'";
    }

    // Lose:
    else if (!didUserWinReversed(userChoice, comChoice)) {
      result = "You lose at reversed 'Scissors, Paper, Stone'";
    }
  }
  // --- Normal Gameplay ---
  else if (!reversedGameplay) {
    console.log("Gameplay mode: Normal");
    // Draw:
    if (userChoice == comChoice) {
      result = "Draw";
    }
    // Win:
    else if (didUserWin(userChoice, comChoice)) {
      result = "You win";
    }
    // Lose:
    else if (!didUserWin(userChoice, comChoice)) {
      result = "You lose";
    }
  }

  // and the result is:
  return result;
};

var formatChoice = function (choice) {
  var choiceFormatted;

  // for normal gameplay
  if (choice == "scissors") {
    choiceFormatted = scissorsFormatted;
  }
  if (choice == "paper") {
    choiceFormatted = paperFormatted;
  }
  if (choice == "stone") {
    choiceFormatted = stoneFormatted;
  }

  // for REVERSED gameplay
  if (choice == "reversed scissors") {
    choiceFormatted = scissorsFormatted;
  }
  if (choice == "reversed paper") {
    choiceFormatted = paperFormatted;
  }
  if (choice == "reversed stone") {
    choiceFormatted = stoneFormatted;
  }

  return choiceFormatted;
};

var main = function (input) {
  console.log("***** LET'S PLAY A GAME *****");

  // set default result (assumes input is not valid)
  var myOutputValue =
    "Sorry, I didn't recognise that. Please type 'scissors', 'paper' or 'stone' to start the game.";

  // create variable for computer's choice
  // var opponentChoice = getComputerChoice();
  var opponentChoice = "stone";

  // format the choices
  var opponentChoiceFormatted = formatChoice(opponentChoice);
  var userChoiceFormatted = formatChoice(input);

  // determine result of game (if input is valid)
  var gameResult = determineResult(input, opponentChoice);
  if (gameResult !== 0) {
    console.log("Computer's choice: ", opponentChoice);
    console.log("User's choice: ", input);
    console.log("Game result: ", gameResult, "!!");
    myOutputValue = `The computer chose ${opponentChoiceFormatted}.<br>
    You chose ${userChoiceFormatted}.  <br><br>
  ${gameResult}!<br><br>
  Wanna try again? Type 'scissors', 'paper' or 'stone' for another round!`;
  }
  console.log("");

  return myOutputValue;
};
