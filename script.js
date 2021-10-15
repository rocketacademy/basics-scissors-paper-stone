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

// ****** Variables ******
// Create variables for formatted choices

var scissorsFormatted = "Scissors ✂️";
var paperFormatted = "Paper 📄";
var stoneFormatted = "Stone 💎";

var reversedScissorsFormatted = "Reversed Scissors ✂️";
var reversedPaperFormatted = "Reversed Paper 📄";
var reversedStoneFormatted = "Reversed Stone 💎";

// Variables for gameplay
var gameMode = "normal";
console.log("Starting game mode: ", gameMode);
console.log(" ");

var username = 0;

var userWin = 0;
var userLose = 0;
var userDraw = 0;

// ****** Helper functions here ******
// Function to generate computer's choice
var getComputerChoice = function () {
  // generate random decimal from 0 to 3 (inclusive of 0, exclusive of 3)
  var randomDecimal = Math.random() * 3;
  // convert decimal into whole number and ensure it's between 1 and 3 (inclusive of 1 and 3)
  var randomNumber = Math.floor(randomDecimal) + 1;

  // create var for computer's choice & set it based on random number generated
  var computerChoice = 0;
  if (randomNumber == 1) {
    computerChoice = "scissors";
  }
  if (randomNumber == 2) {
    computerChoice = "paper";
  }
  if (randomNumber == 3) {
    computerChoice = "stone";
  }

  return computerChoice;
};

// Function to output results
// -- For normal gameplay --
var determineResult = function (userChoice, comChoice) {
  console.log(" ");
  console.log("<<< Initiating normal game mode >>>");
  var result = 0;

  // Set rules for winning
  var didUserWin =
    (userChoice == "scissors" && comChoice == "paper") ||
    (userChoice == "paper" && comChoice == "stone") ||
    (userChoice == "stone" && comChoice == "scissors");

  // Draw:
  if (userChoice == comChoice) {
    result = "It's a draw";
    userDraw += 1;
  }
  // Win:
  else if (didUserWin) {
    result = "You win";
    userWin += 1;
  }
  // Lose:
  else if (!didUserWin) {
    result = "You lose";
    userLose += 1;
  }

  // and the result is:
  return result;
};
// -- For reversed gameplay --
var determineResultReversed = function (userChoice, comChoice) {
  console.log(" ");
  console.log("<<< Initiating REVERSED game mode >>>");

  var result = 0;

  // Set rules for winning
  var didUserWinReversed =
    (userChoice == "scissors" && comChoice == "stone") ||
    (userChoice == "paper" && comChoice == "scissors") ||
    (userChoice == "stone" && comChoice == "paper");

  // Draw:
  if (userChoice == comChoice) {
    result = "It's a draw";
    userDraw += 1;
  }

  // Win:
  else if (didUserWinReversed) {
    result = "You win at reversed 'Scissors, Paper, Stone'";
    userWin += 1;
  }

  // Lose:
  else if (!didUserWinReversed) {
    result = "You lose at reversed 'Scissors, Paper, Stone'";
    userLose += 1;
  }
  return result;
};

// Function to format choices
var formatChoice = function (choice) {
  var choiceFormatted;

  // for normal gameplay
  if (choice == "scissors") {
    choiceFormatted = scissorsFormatted;
  } else if (choice == "paper") {
    choiceFormatted = paperFormatted;
  } else if (choice == "stone") {
    choiceFormatted = stoneFormatted;
  }

  // for REVERSED gameplay
  if (choice == "reversed scissors") {
    choiceFormatted = reversedScissorsFormatted;
  } else if (choice == "reversed paper") {
    choiceFormatted = reversedPaperFormatted;
  } else if (choice == "reversed stone") {
    choiceFormatted = reversedStoneFormatted;
  }

  return choiceFormatted;
};

// Main function
var main = function (input) {
  // set default result (assumes username not entered)
  var myOutputValue = "Enter your name first to play the game.";

  // validate username / input
  if (input !== "" && username == 0) {
    username = input;
    console.log("****** NEW CHALLENGER ******");
    console.log("User: ", username);
    console.log(" ");
    return `
    Hi there, ${username}! <br><br>
    Would you like to play a game? <br><br>
    Type 'scissors', 'paper' or 'stone' to begin!
    `;
  } else if (username !== 0) {
    myOutputValue = `Sorry ${username}, I didn't recognise that. Please type 'scissors', 'paper' or 'stone' to play.`;
  }

  // gameplay -- game mode
  var isGameModeNormal = gameMode == "normal";
  console.log("Current gamemode: ", gameMode);

  if (gameMode == "normal" && (input == "reversed" || input == "reverse")) {
    gameMode = "reversed";
    console.log("New gamemode: ", gameMode);
    console.log(" ");
    return (myOutputValue = "Reversing the game!");
  } else if (
    gameMode == "reversed" &&
    (input == "reversed" || input == "reverse")
  ) {
    gameMode = "normal";

    console.log("New gamemode: ", gameMode);
    console.log(" ");
    return `Resetting the game!`;
  }

  // gameplay --------
  var opponentChoice = getComputerChoice();
  var gameResult;
  var isInputValid =
    input == "scissors" ||
    input == "paper" ||
    input == "stone" ||
    input == "reversed" ||
    input == "reverse";

  // normal gameplay
  if (isGameModeNormal) {
    gameResult = determineResult(input, opponentChoice);
  }
  // reversed gameplay
  else if (!isGameModeNormal) {
    gameResult = determineResultReversed(input, opponentChoice);
  }
  // if input is not recognised
  else if (!isInputValid) {
    myOutputValue = `Sorry ${username}, I didn't recognise that. Please type 'scissors', 'paper' or 'stone' to play.`;
    console.log("Input not recognised --> ", input);
  }

  var winRate = ((userWin / (userWin + userLose + userDraw)) * 100).toFixed(1);
  var userChoiceFormatted = formatChoice(input);
  var opponentChoiceFormatted = formatChoice(opponentChoice);

  if (isInputValid && gameResult !== 0) {
    // motivational message
    var motivationMessage = `Wow, ${username}! You're good at this!`;
    if (winRate <= 20) {
      motivationMessage = `Oh my, ${username}, you're really bad at this...`;
    } else if (winRate > 20 && winRate <= 50) {
      motivationMessage = `Keep it up, you're getting there!`;
    } else if (winRate > 50 && winRate <= 75) {
      motivationMessage = `Doing great, ${username}! `;
    }

    // Log out game details
    console.log("Computer chose [", opponentChoice, "]");
    console.log(username, " chose [", input, "]");
    console.log("Game result: ", gameResult, "!!");
    console.log(" ");
    console.log("Score");
    console.log("Computer Wins: ", userLose);
    console.log("User Wins: ", userWin, "(Winning rate of ", winRate, "%)");
    console.log("Number of Draws: ", userDraw);
    console.log(" ");
    console.log(" ------");
    console.log(" ");

    myOutputValue = `
    The computer chose ${opponentChoiceFormatted}<br>
    You chose ${userChoiceFormatted}<br><br>
    ${gameResult}!<br><br>
    [ Score ] <br>
    Computer : ${userLose} <br>
    ${username}: ${userWin} <br>
    Draws: ${userDraw} <br><br>
    ${motivationMessage} Wanna try again? Type 'scissors', 'paper' or 'stone' for another round!
    `;
  }

  console.log("");

  return myOutputValue;
};
