// What is the input going to be? Stone or Paper or Scissors
// What should the output be? You played {input} and the computer played {stone/paper/scissors} so you {won/lost/drew}
// How will the computer's option be randomly generated? Using math.random to generate a number between 0-2
// How many different cases are there? 3 (win, lose, draw)

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

//Generate a computer turn based on a dice roll
var generateComputerTurn = function () {
  // Generate a decimal from 0 through 3, inclusive of 0
  var randomDecimal = Math.random() * 3;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 2 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  console.log("dice rolls: ", randomInteger);

  if (randomInteger == 0) {
    console.log("computer played 0 - stone");
    console.log(randomInteger == 0);
    return STONE;
  }

  if (randomInteger == 1) {
    console.log("computer played 1 - paper");
    console.log(randomInteger == 1);
    return PAPER;
  }

  if (randomInteger == 2) {
    console.log("computer played 2 - scissors");
    console.log(randomInteger == 2);
    return SCISSORS;
  }
};

var main = function (input) {
  //Change gamemode
  if (input == "reverse" && gameMode == "normal") {
    gameMode = "reverse";
    console.log("Game Mode: ", gameMode);
    myOutputValue = "The game mode has now been reversed.";
    return myOutputValue;
  }
  if (input == "reverse" && gameMode == "reverse") {
    gameMode = "normal";
    console.log("Game Mode: ", gameMode);
    myOutputValue = "The game mode has now been reversed.";
    return myOutputValue;
  }

  // Input Validation
  if (
    input != "stone" &&
    input != "paper" &&
    input != "scissors" &&
    input != "reverse"
  ) {
    myOutputValue =
      yourname +
      " you played " +
      input +
      " which is invalid, please only play stone, paper or scissors.<br> You can also try playing the reversed mode by typing 'reverse'.";
    // Return output.
    console.log("input validation: ", input);
    return myOutputValue;
  }

  // Assign a play to each dice number
  var computerTurn = generateComputerTurn();

  // WIN SCENARIOS
  // stone vs Scissors (win) / reversed stone vs paper (win)
  // Paper vs stone (win) / reversed paper vs scissors (win)
  // Scissors vs paper (win) or reversed scissors vs stone (win)
  if (
    (gameMode == "normal" && input == "stone" && computerTurn == "scissors") ||
    (gameMode == "reverse" && input == "stone" && computerTurn == "paper") ||
    (gameMode == "normal" && input == "paper" && computerTurn == "stone") ||
    (gameMode == "reverse" && input == "paper" && computerTurn == "scissors") ||
    (gameMode == "normal" && input == "scissors" && computerTurn == "paper") ||
    (gameMode == "reverse" && input == "scissors" && computerTurn == "stone")
  ) {
    userWins = userWins + 1;
    myOutputValue =
      yourname +
      ", you played " +
      input +
      " and the computer played " +
      computerTurn +
      " so you win. <br>" +
      yourname +
      " Wins:" +
      userWins +
      "(" +
      ((userWins / (draws + compWins + userWins)) * 100).toFixed(2) +
      "%" +
      ")" +
      "<br> Computer Wins: " +
      compWins +
      "(" +
      ((compWins / (draws + compWins + userWins)) * 100).toFixed(2) +
      "%" +
      ")";
    // Return output.
    console.log("you played ", input, " and computer played ", computerTurn);
    return myOutputValue;
  }

  // DRAW SCENARIOS
  // stone vs stone (draw)
  // Paper vs paper (draw)
  // Scissors vs Scissors (draw)

  if (
    ((input == "stone" || input == "reversed stone") &&
      computerTurn == "stone") ||
    ((input == "paper" || input == "reversed paper") &&
      computerTurn == "paper") ||
    ((input == "scissors" || input == "reversed scissors") &&
      computerTurn == "scissors")
  ) {
    draws = draws + 1;
    myOutputValue =
      yourname +
      " you played " +
      input +
      " and the computer played " +
      computerTurn +
      " so you drew. <br>" +
      yourname +
      " Wins:" +
      userWins +
      "(" +
      ((userWins / (draws + compWins + userWins)) * 100).toFixed(2) +
      "%" +
      ")" +
      "<br> Computer Wins: " +
      compWins +
      "(" +
      ((compWins / (draws + compWins + userWins)) * 100).toFixed(2) +
      "%" +
      ")";
    // Return output.
    console.log("you played ", input, " and computer played ", computerTurn);
    return myOutputValue;
  }

  // LOSE SCENARIOS
  // stone vs Paper (lose) / reversed stone vs scissors (lose)
  // Paper vs Scissors (lose) / reversed paper vs stone (lose)
  // scissors vs stone (lose) / reversed scissors vs paper (lose)

  if (
    (gameMode == "normal" && input == "stone" && computerTurn == "paper") ||
    (gameMode == "reverse" && "stone" && computerTurn == "scissors") ||
    (gameMode == "normal" && input == "paper" && computerTurn == "scissors") ||
    (gameMode == "reverse" && input == "paper" && computerTurn == "stone") ||
    (gameMode == "normal" && input == "scissors" && computerTurn == "stone") ||
    (gameMode == "reverse" && input == "scissors" && computerTurn == "paper")
  ) {
    compWins = compWins + 1;
    myOutputValue =
      yourname +
      " you played " +
      input +
      " and the computer played " +
      computerTurn +
      " so you lose. <br>" +
      yourname +
      " Wins:" +
      userWins +
      "(" +
      ((userWins / (draws + compWins + userWins)) * 100).toFixed(2) +
      "%" +
      ")" +
      "<br> Computer Wins: " +
      compWins +
      "(" +
      ((compWins / (draws + compWins + userWins)) * 100).toFixed(2) +
      "%" +
      ")";
    // Return output.
    console.log("you played ", input, " and computer played ", computerTurn);
    return myOutputValue;
  }
};
