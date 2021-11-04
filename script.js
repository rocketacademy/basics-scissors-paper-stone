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

// Variables for gameplay
var gameMode = "waiting for username...";
console.log(gameMode);
console.log(" ");

var username = "";

var userWin = 0;
var userLose = 0;
var userDraw = 0;

// ****** Helper functions here ******
// Function to change game mode
var changeGameMode = function (mode) {
  var gameModeMessage;

  // change from Normal to Reversed mode
  if (mode == "normal") {
    gameMode = "reversed";
    console.log(" ");
    console.log("New gamemode: ", gameMode);
    gameModeMessage = `Reversing the game!`;
  }
  // change from Reversed to Normal mode
  else if (mode == "reversed") {
    gameMode = "normal";
    console.log(" ");
    console.log("New gamemode: ", gameMode);
    gameModeMessage = `Resetting the game!`;
  }
  return gameModeMessage;
};

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
var determineResult = function (gameMode, userChoice, comChoice) {
  console.log(" ");
  console.log("<<< Initiating ", gameMode, " game mode >>>");
  var result = "";

  // Set rules for winning normal game mode
  var didUserWin =
    (userChoice == "scissors" && comChoice == "paper") ||
    (userChoice == "paper" && comChoice == "stone") ||
    (userChoice == "stone" && comChoice == "scissors");

  // Set rules for winning reversed game mode
  var didUserWinReversed =
    (userChoice == "scissors" && comChoice == "stone") ||
    (userChoice == "paper" && comChoice == "scissors") ||
    (userChoice == "stone" && comChoice == "paper");

  // Draw:
  if (userChoice == comChoice) {
    result = "It's a draw";
    userDraw += 1;
  }
  // for normal gameplay
  else if (gameMode == "normal") {
    // Win:
    if (didUserWin) {
      result = "You win";
      userWin += 1;
    }
    // Lose:
    else if (!didUserWin) {
      result = "You lose";
      userLose += 1;
    }
  }
  // for reversed gameplay
  else if (gameMode == "reversed") {
    if (didUserWinReversed) {
      result = "You win at reversed 'Scissors, Paper, Stone'";
      userWin += 1;
    }

    // Lose:
    else if (!didUserWinReversed) {
      result = "You lose at reversed 'Scissors, Paper, Stone'";
      userLose += 1;
    }
  }

  // and the result is:
  return result;
};

// Function to format choices
var formatChoice = function (choice) {
  var choiceFormatted;

  if (choice == "scissors") {
    choiceFormatted = scissorsFormatted;
  } else if (choice == "paper") {
    choiceFormatted = paperFormatted;
  } else if (choice == "stone") {
    choiceFormatted = stoneFormatted;
  }

  return choiceFormatted;
};

// function to generate motivational message
var motivateUser = function (username, winRate) {
  var message = `Wow, ${username}! You're good at this!`;
  if (winRate <= 20) {
    message = `Oh my, ${username}, you're really bad at this...`;
  } else if (winRate > 20 && winRate <= 50) {
    message = `Keep it up, you're getting there!`;
  } else if (winRate > 50 && winRate <= 75) {
    message = `Doing great, ${username}! `;
  }
  return `${message} Your win percentage is ${winRate}%.`;
};

// Main function
var main = function (input) {
  var myOutputValue = "";
  var isInputValid =
    input == "scissors" ||
    input == "paper" ||
    input == "stone" ||
    input == "reverse";

  // capture the first input as username (if blank, set as anonymous moose)
  if (gameMode == "waiting for username...") {
    // set the username
    if (input == "") {
      username = "anonymous moose";
    } else {
      username = input;
    }
    console.log("****** NEW CHALLENGER ******");
    console.log("User: ", username);

    // change the game mode
    gameMode = "normal";

    // set message for new user
    myOutputValue = `
    Hi there, ${username}! <br><br>
    Would you like to play a game? <br><br>
    Type 'scissors', 'paper' or 'stone' to begin! <br><br>
    You can also choose to reverse the rules to win by typing "reverse".
    `;

    return myOutputValue;
  }

  // if input is not recognised
  if (!isInputValid) {
    myOutputValue = `Sorry ${username}, I didn't recognise that. Please type 'scissors', 'paper' or 'stone' to play.`;
    console.log("Input not recognised --> ", input);
    return myOutputValue;
  }

  // if user inputs "reverse", change the game mode
  if (input == "reverse") {
    myOutputValue = changeGameMode(gameMode);
    return myOutputValue;
  }

  // if input is valid, play the game
  if (isInputValid) {
    // choices and formatting
    var opponentChoice = getComputerChoice();
    var opponentChoiceFormatted = formatChoice(opponentChoice);
    var userChoiceFormatted = formatChoice(input);

    // gameplay
    var gameResult = determineResult(gameMode, input, opponentChoice);
    var winRate = ((userWin / (userWin + userLose + userDraw)) * 100).toFixed(
      1
    );

    // motivational message
    var motivationMessage = motivateUser(username, winRate);

    myOutputValue = `
    The computer chose ${opponentChoiceFormatted}<br>
    You chose ${userChoiceFormatted}<br><br>
    ${gameResult}!<br><br>
    [ Score ] <br>
    Computer : ${userLose} <br>
    ${username}: ${userWin} <br>
    Draws: ${userDraw} <br><br>
    ${motivationMessage}<br><br>
    Wanna try again? Type 'scissors', 'paper' or 'stone' for another round! You can also type 'reverse' to change the game mode.
    `;

    // Log out game details
    console.log("Computer chose [", opponentChoice, "]");
    console.log(username, " chose [", input, "]");
    console.log("Game result: ", gameResult, "!!");
    console.log("------- SCORE -------");
    console.log("Computer Wins: ", userLose);
    console.log("User Wins: ", userWin, "(Winning rate of ", winRate, "%)");
    console.log("Number of Draws: ", userDraw);
    console.log("---------------------");

    return myOutputValue;
  }

  console.log("");

  return myOutputValue;
};
