// ========== Scissors Paper Stone ========== //

// The user inputs one of "scissors", "paper", or "stone".
// The program randomly choose "scissors", "paper", or "stone" by rolling a dice.

var rollDigit = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.ceil(randomDecimal);
  return randomInteger;
};

// If number is 1, it means scissors.
// If number is 2, it means stone.
// If number is 3, it means paper.

var assignInteger = function () {
  var digit = rollDigit();
  var choice = "";
  if (digit == 1) {
    choice = "scissors";
  } else if (digit == 2) {
    choice = "stone";
  } else choice = "paper";
  return choice;
};

// Calculate win percentage.
var calWinPercentage = function (winCount, noOfRounds) {
  var winPercent = (winCount / noOfRounds) * 100;
  return winPercent.toFixed(2);
};

var playSPSGame = function (userGuess, userName) {
  var programChoice = assignInteger();
  var userGuess = userGuess.toLowerCase();
  var message = "";

  // If user guess is not "scissors", "paper", "stone", output is "Your input is invalid. Please try again."
  if (userGuess != "scissors" || userGuess != "stone" || userGuess != "paper") {
    message =
      userName +
      ", your input is invalid. Please try again." +
      "<br><br>" +
      "Please key in either 'scissors', 'paper', or 'stone' to play.";
  }
  // If program choice is same as user guess, output is "it's a draw."
  if (programChoice == userGuess) {
    noOfRounds += 1;
    message =
      "You choose " +
      userGuess +
      "." +
      "<br>" +
      "The computer choose " +
      programChoice +
      "." +
      "<br><br>" +
      "It's a draw." +
      "<br><br>" +
      "Computer wins: " +
      winCountCom +
      " times (" +
      calWinPercentage(winCountCom, noOfRounds) +
      "%)" +
      "<br>" +
      "You win: " +
      winCountUser +
      " times (" +
      calWinPercentage(winCountUser, noOfRounds) +
      "%)";
  }
  // If program choice is scissors and user inputs paper OR If program choice is stone and user inputs scissors OR If program choice is paper and user inputs stone, output is "The user loses."
  if (
    (programChoice == "scissors" && userGuess == "paper") ||
    (programChoice == "stone" && userGuess == "scissors") ||
    (programChoice == "paper" && userGuess == "stone")
  ) {
    noOfRounds += 1;
    winCountCom += 1;
    message =
      "You choose " +
      userGuess +
      "." +
      "<br>" +
      "The computer choose " +
      programChoice +
      "." +
      "<br><br>" +
      "You lose! Too Bad!" +
      "<br><br>" +
      "Computer wins: " +
      winCountCom +
      " times  (" +
      calWinPercentage(winCountCom, noOfRounds) +
      "%)" +
      "<br>" +
      "You win: " +
      winCountUser +
      " times  (" +
      calWinPercentage(winCountUser, noOfRounds) +
      "%)";
  }
  // If program choice is scissors and user inputs stone OR If program choice is stone and user inputs paper OR If program choice is paper and user inputs scissors, output is "The program loses."
  if (
    (programChoice == "scissors" && userGuess == "stone") ||
    (programChoice == "stone" && userGuess == "paper") ||
    (programChoice == "paper" && userGuess == "scissors")
  ) {
    noOfRounds += 1;
    winCountUser += 1;
    message =
      "You choose " +
      userGuess +
      "." +
      "<br>" +
      "The computer choose " +
      programChoice +
      "." +
      "<br><br>" +
      "You win! Congratulations!" +
      "<br><br>" +
      "Computer wins: " +
      winCountCom +
      " times  (" +
      calWinPercentage(winCountCom, noOfRounds) +
      "%)" +
      "<br>" +
      "You win: " +
      winCountUser +
      " times  (" +
      calWinPercentage(winCountUser, noOfRounds) +
      "%)";
  }
  // if win percentage of user < win percentage of computer, prompt " you can do better!"
  if (
    calWinPercentage(winCountUser, noOfRounds) <
      calWinPercentage(winCountCom, noOfRounds) &&
    (userGuess == "scissors" || userGuess == "stone" || userGuess == "paper")
  ) {
    return (
      message +
      "<br><br> You can do better, " +
      userName +
      "!" +
      "<br><br>" +
      userName +
      ", you can type 'scissors', 'paper' or 'stone' to play another round."
    );
  } else if (
    // if win percentage of user > win percentage of computer, prompt "you are doing great!"
    calWinPercentage(winCountUser, noOfRounds) >
      calWinPercentage(winCountCom, noOfRounds) &&
    (userGuess == "scissors" || userGuess == "stone" || userGuess == "paper")
  ) {
    return (
      message +
      "<br><br> You are doing great," +
      userName +
      "!" +
      "<br><br>" +
      userName +
      ", you can type 'scissors', 'paper' or 'stone' to play another round."
    );
  } else if (
    // if win percentage of user = win percentage of computer, prompt "keep going!"
    calWinPercentage(winCountUser, noOfRounds) ==
      calWinPercentage(winCountCom, noOfRounds) &&
    (userGuess == "scissors" || userGuess == "stone" || userGuess == "paper")
  ) {
    return (
      message +
      "<br><br> Keep Going, " +
      userName +
      "!" +
      "<br><br>" +
      userName +
      ", you can type 'scissors', 'paper' or 'stone' to play another round."
    );
  }
  return message;
};

var winCountUser = 0;
var winCountCom = 0;
var noOfRounds = 0;
var userName = "";
var gameMode = "pending user name";

var main = function (input) {
  var outputValue = "";
  // if game mode is "pending user name", check:
  // if got input, set user name as input and game mode to play SPS game.
  // if no input, prompt user to enter name.
  if (gameMode == "pending user name") {
    if (input != "") {
      userName = input;
      gameMode = "scissors paper stone game";
      outputValue =
        "Welcome " +
        userName +
        " to the Scissors Paper Stone game!" +
        "<br><br>" +
        "Please key in either 'scissors', 'paper', or 'stone' to start playing.";
    } else {
      outputValue = "Please enter your name.";
    }
  } else if (gameMode == "scissors paper stone game") {
    outputValue = playSPSGame(input, userName);
  }
  return outputValue;
};
