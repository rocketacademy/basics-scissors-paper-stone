// What is the input going to be? STONE or PAPER or SCISSORS
// What should the output be? You played {input} and the computer played {STONE/PAPER/SCISSORS} so you {won/lost/drew}
// How will the computer's option be randomly generated? Using math.random to generate a number between 0-2
// How many different cases are there? 3 (win, lose, draw)

// Grab userName from index.html
var userName = yourName;

//Record game mode
var gameMode = "normal";

//String constant variable names
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";

//Initialise the number of wins, losses and draws
var userWins = 0;
var compWins = 0;
var draws = 0;
var previousWinner = "";

// Calculate Win Loss Percentages
var calculateUserWinPercent = function (userWins, compWins, draws) {
  userWinPercent = ((userWins / (userWins + compWins + draws)) * 100).toFixed(2);
  return userWinPercent;
};

var calculateCompWinPercent = function (userWins, compWins, draws) {
  compWinPercent = ((compWins / (userWins + compWins + draws)) * 100).toFixed(2);
  return compWinPercent;
};

//Generate a computer turn based on a dice roll
var generateComputerTurn = function () {
  // Generate a decimal from 0 through 3, inclusive of 0
  var randomDecimal = Math.random() * 3;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 2 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  console.log("dice rolls: ", randomInteger);

  if (randomInteger == 0) {
    console.log("computer played 0 - STONE");
    console.log(randomInteger == 0);
    return STONE;
  }

  if (randomInteger == 1) {
    console.log("computer played 1 - PAPER");
    console.log(randomInteger == 1);
    return PAPER;
  }

  if (randomInteger == 2) {
    console.log("computer played 2 - SCISSORS");
    console.log(randomInteger == 2);
    return SCISSORS;
  }
};

// Refactor actual game logic
var playGame = function (gameMode, userGuess) {
  var message = "";
  // Assign a play to each dice number
  var computerTurn = generateComputerTurn();

  // WIN SCENARIOS
  // STONE vs SCISSORS (win) / reversed STONE vs PAPER (win)
  // PAPER vs STONE (win) / reversed PAPER vs SCISSORS (win)
  // SCISSORS vs PAPER (win) or reversed SCISSORS vs STONE (win)
  if (
    (gameMode == "normal" && userGuess == STONE && computerTurn == SCISSORS) ||
    (gameMode == "reverse" && userGuess == STONE && computerTurn == PAPER) ||
    (gameMode == "normal" && userGuess == PAPER && computerTurn == STONE) ||
    (gameMode == "reverse" && userGuess == PAPER && computerTurn == SCISSORS) ||
    (gameMode == "normal" && userGuess == SCISSORS && computerTurn == PAPER) ||
    (gameMode == "reverse" && userGuess == SCISSORS && computerTurn == STONE)
  ) {
    userWins = userWins + 1;
    previousWinner = "user";
    message =
      userName +
      ", you played " +
      userGuess +
      " and the computer played " +
      computerTurn +
      " so you win. <br>" +
      userName +
      " Wins:" +
      userWins +
      "(" +
      calculateUserWinPercent(userWins, compWins, draws) +
      "%) <br> Computer Wins: " +
      compWins +
      "(" +
      calculateCompWinPercent(userWins, compWins, draws) +
      "%)";
    // Return output.
    console.log("you played ", userGuess, " and computer played ", computerTurn);
    console.log("previous winner is user");
    return message;
  }

  // DRAW SCENARIOS
  if ((gameMode == "normal" || gameMode == "reverse") && userGuess == computerTurn) {
    draws = draws + 1;
    message =
      userName +
      " you played " +
      userGuess +
      " and the computer played " +
      computerTurn +
      " so you drew. <br>" +
      userName +
      " Wins:" +
      userWins +
      "(" +
      calculateUserWinPercent(userWins, compWins, draws) +
      "%) <br> Computer Wins: " +
      compWins +
      "(" +
      calculateCompWinPercent(userWins, compWins, draws) +
      "%)";
    // Return output.
    console.log("you played ", userGuess, " and computer played ", computerTurn);
    return message;
  }

  // LOSE SCENARIOS
  // STONE vs PAPER (lose) / reversed STONE vs SCISSORS (lose)
  // PAPER vs SCISSORS (lose) / reversed PAPER vs STONE (lose)
  // SCISSORS vs STONE (lose) / reversed SCISSORS vs PAPER (lose)

  if (
    (gameMode == "normal" && userGuess == STONE && computerTurn == PAPER) ||
    (gameMode == "reverse" && userGuess == STONE && computerTurn == SCISSORS) ||
    (gameMode == "normal" && userGuess == PAPER && computerTurn == SCISSORS) ||
    (gameMode == "reverse" && userGuess == PAPER && computerTurn == STONE) ||
    (gameMode == "normal" && userGuess == SCISSORS && computerTurn == STONE) ||
    (gameMode == "reverse" && userGuess == SCISSORS && computerTurn == PAPER)
  ) {
    compWins = compWins + 1;
    previousWinner = "computer";
    message =
      userName +
      " you played " +
      userGuess +
      " and the computer played " +
      computerTurn +
      " so you lose. <br>" +
      userName +
      " Wins:" +
      userWins +
      "(" +
      calculateUserWinPercent(userWins, compWins, draws) +
      "%) <br> Computer Wins: " +
      compWins +
      "(" +
      calculateCompWinPercent(userWins, compWins, draws) +
      "%)";
    // Return output.
    console.log("you played ", userGuess, " and computer played ", computerTurn);
    return message;
  }
};

//Input Validation
var performInputValidation = function (userinput) {
  return userinput == STONE || userinput == PAPER || userinput == SCISSORS || userinput == "reverse";
};

var inputInvalidMessage = function (userName, userinput) {
  message = userName + " you played " + userinput + " which is invalid, please only play stone, paper or scissors.<br> You can also try playing the reversed mode by typing 'reverse'.";
  return message;
};

var main = function (input) {
  var myOutputValue = "";
  // First check if input is an acceptable option
  var inputIsValid = performInputValidation(input);
  console.log("input validation: ", performInputValidation(input));
  if (inputIsValid == false) {
    myOutputValue = inputInvalidMessage(userName, input);
    return myOutputValue;
  } else {
    //Then check if user is trying to change gamemode
    if (input == "reverse" && gameMode == "normal") {
      gameMode = "reverse";
      console.log("Game Mode: ", gameMode);
      myOutputValue = "The game mode has now been reversed. It is now in " + gameMode + " mode.";
      return myOutputValue;
    } else if (input == "reverse" && gameMode == "reverse") {
      gameMode = "normal";
      console.log("Game Mode: ", gameMode);
      myOutputValue = "The game mode has now been reversed. It is now in " + gameMode + " mode.";
      return myOutputValue;
    } else if (input == "korean") {
      gameMode = "korean";
      console.log("Game Mode: ", gameMode);
      myOutputValue = "The game mode has now been changed. It is now in " + gameMode + " mode.";
      return myOutputValue;
    } else myOutputValue = playGame(gameMode, input);
    return myOutputValue;
  }
};
