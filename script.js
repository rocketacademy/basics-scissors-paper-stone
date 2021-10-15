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

// Function to determine if user won for normal & reversed gameplays
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

// Function to output results
var determineResult = function (userChoice, comChoice) {
  var result = 0;

  // determine if gameplay is normal or reversed
  var reversedGameplay = userChoice.includes("reversed");

  // ----- Reversed gameplay -----
  // if (reversedGameplay) {
  //   console.log("<<< Gameplay mode: REVERSED! >>>");
  //   // Draw:
  //   if (
  //     (userChoice == "reversed scissors" && comChoice == "scissors") ||
  //     (userChoice == "reversed paper" && comChoice == "paper") ||
  //     (userChoice == "reversed stone" && comChoice == "stone")
  //   ) {
  //     result = "It's a draw";
  //     userDraw += 1;
  //   }

  //   // Win:
  //   else if (didUserWinReversed(userChoice, comChoice)) {
  //     result = "You win at reversed 'Scissors, Paper, Stone'";
  //     userWin += 1;
  //   }

  //   // Lose:
  //   else if (!didUserWinReversed(userChoice, comChoice)) {
  //     result = "You lose at reversed 'Scissors, Paper, Stone'";
  //     userLose += 1;
  //   }
  // }

  // --- Normal Gameplay ---
  // else
  if (!reversedGameplay) {
    console.log("<<< Gameplay mode: Normal >>>");
    // Draw:
    if (userChoice == comChoice) {
      result = "It's a draw";
      userDraw += 1;
    }
    // Win:
    else if (didUserWin(userChoice, comChoice)) {
      result = "You win";
      userWin += 1;
    }
    // Lose:
    else if (!didUserWin(userChoice, comChoice)) {
      result = "You lose";
      userLose += 1;
    }
  }

  // and the result is:
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

var username = 0;

// Main function
var main = function (input) {
  // set default result (assumes username is entered but input is not valid)
  var myOutputValue =
    "Sorry, I didn't recognise that. Please type 'scissors', 'paper' or 'stone' to play.";

  // create variable for computer's choice
  var opponentChoice = getComputerChoice();
  // var opponentChoice = "stone";

  // format the choices
  var userChoiceFormatted = formatChoice(input);
  var opponentChoiceFormatted = formatChoice(opponentChoice);

  // determine result of game (if input is valid)
  var isInputValid =
    input == "scissors" || input == "paper" || input == "stone";

  // take in user's name
  if (input !== "" && username == 0) {
    username = input;
    console.log("****** NEW CHALLENGER ******");
    console.log("User: ", username);
    return `
    Hi there, ${username}! <br><br>
    Would you like to play a game? <br><br>
    Type 'scissors', 'paper' or 'stone' to begin!
    `;
  } else {
    myOutputValue = "Enter your name first to play the game.";
  }

  // gameplay
  var gameResult = determineResult(input, opponentChoice);
  var winRate = ((userWin / (userWin + userLose + userDraw)) * 100).toFixed(1);

  if (!isInputValid) {
    myOutputValue = `Sorry ${username}, I didn't recognise that. Please type 'scissors', 'paper' or 'stone' to play.`;
    console.log("Input not recognised --> ", input);
  }

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
    console.log(" --- Current Score ---");
    console.log("Computer Wins: ", userLose);
    console.log("User Wins: ", userWin, "(Winning rate of ", winRate, "%)");
    console.log("Number of Draws: ", userDraw);

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
