// Setting the default gamestate to inform user to input
var mode = "username request";
var username = "";

// Winrate records
var noUserTries = 0;
var noDraws = 0;
var computerWins = 0;
var userWins = 0;
var winrate = Math.floor(Number(userWins) / Number(noUserTries)) * Number(100);
// Creating a variable for output
var myOutputValue = "";

var main = function (input) {
  if (mode == "username request" && input != "") {
    // collect username
    username = input;
    console.log("Username");
    console.log(username);
    mode = "SPS game";
    console.log("current mode");
    console.log(mode);
  } else {
    myOutputValue = "Hi! Please tell me your name to start playing.";
  }
  var computer = computerRoll();
  //any input other than rock, paper or scissors give this outputValue
  if (mode == "SPS game") {
    myOutputValue =
      "Hi " +
      username +
      "! Let's play! Please input 'stone', 'paper' or 'scissors' to play.";
  }
  // (1) Classic game
  // (1a) Classic Win
  if (
    (input == "scissors" && computer == "paper") ||
    (input == "paper" && computer == "stone") ||
    (input == "stone" && computer == "scissors")
  ) {
    noUserTries = noUserTries + 1;
    userWins = userWins + 1;
    winrate = Math.floor(
      (Number(userWins) / Number(noUserTries)) * Number(100)
    );
    myOutputValue =
      "You won! You picked " +
      input +
      " and the computer picked " +
      computer +
      "." +
      "<br>" +
      "<br>" +
      "Nice one!" +
      "<br>" +
      "<br>" +
      "(1) " +
      username +
      ", your winrate is " +
      winrate +
      "% with " +
      userWins +
      " wins!" +
      "!" +
      "<br>" +
      "<br>" +
      "(2) Computer's winrate is " +
      (100 - winrate) +
      "% with " +
      computerWins +
      " wins.." +
      "<br>" +
      "<br>" +
      "(3) Number of draws = " +
      noDraws +
      "<br>" +
      "<br>" +
      "Please input 'stone', 'paper' or 'scissors' to play again!";
  }
  // (1b) Classic Loss
  if (
    (input == "scissors" && computer == "stone") ||
    (input == "paper" && computer == "scissors") ||
    (input == "stone" && computer == "paper")
  ) {
    noUserTries = noUserTries + 1;
    computerWins = computerWins + 1;
    winrate = Math.floor(
      (Number(userWins) / Number(noUserTries)) * Number(100)
    );
    myOutputValue =
      "You lost! You picked " +
      input +
      " and the computer picked " +
      computer +
      "." +
      "<br>" +
      "<br>" +
      "Better luck next time!" +
      "<br>" +
      "<br>" +
      "(1) " +
      username +
      ", your winrate is " +
      winrate +
      "% with " +
      userWins +
      " wins!" +
      "!" +
      "<br>" +
      "<br>" +
      "(2) Computer's winrate is " +
      (100 - winrate) +
      "% with " +
      computerWins +
      " wins.." +
      "<br>" +
      "<br>" +
      "(3) Number of draws = " +
      noDraws +
      "<br>" +
      "<br>" +
      "Please input 'stone', 'paper' or 'scissors' to play again!";
  }
  // (1c) Classic Draw
  if (
    (input == "scissors" && computer == "scissors") ||
    (input == "paper" && computer == "paper") ||
    (input == "stone" && computer == "stone")
  ) {
    noDraws = noDraws + 1;
    myOutputValue =
      "It's a draw! You picked " +
      input +
      " and the computer picked " +
      computer +
      "." +
      "<br>" +
      "<br>" +
      "No winners this time!" +
      "<br>" +
      "<br>" +
      "(1) " +
      username +
      ", your winrate is " +
      winrate +
      "% with " +
      userWins +
      " wins!" +
      "!" +
      "<br>" +
      "<br>" +
      "(2) Computer's winrate is " +
      (100 - winrate) +
      "% with " +
      computerWins +
      " wins.." +
      "<br>" +
      "<br>" +
      "(3) Number of draws = " +
      noDraws +
      "<br>" +
      "<br>" +
      "Please input 'stone', 'paper' or 'scissors' to play again!";
  }
  // (2) Reversed Game
  // (2a) Reversed Win
  if (
    (input == "reversed scissors" && computer == "stone") ||
    (input == "reversed paper" && computer == "scissors") ||
    (input == "reversed stone" && computer == "paper")
  ) {
    myOutputValue =
      "You won! You picked " +
      input +
      " and the computer picked " +
      computer +
      "." +
      "<br>" +
      "<br>" +
      "Nice one!" +
      "<br>" +
      "<br>" +
      "Please input 'stone', 'paper' or 'scissors' to play again!";
  }
  // (2b) Reversed Loss
  if (
    (input == "reversed scissors" && computer == "paper") ||
    (input == "reversed paper" && computer == "stone") ||
    (input == "reversed stone" && computer == "scissors")
  ) {
    myOutputValue =
      "You lost! You picked " +
      input +
      " and the computer picked " +
      computer +
      "." +
      "<br>" +
      "<br>" +
      "Better luck next time!" +
      "<br>" +
      "<br>" +
      "Please input 'stone', 'paper' or 'scissors' to play again!";
  }
  // (2c) Reversed Draw
  if (
    (input == "reversed scissors" && computer == "scissors") ||
    (input == "reversed paper" && computer == "paper") ||
    (input == "reversed stone" && computer == "stone")
  ) {
    myOutputValue =
      "It's a draw! You picked " +
      input +
      " and the computer picked " +
      computer +
      "." +
      "<br>" +
      "<br>" +
      "No winners this time!" +
      "<br>" +
      "<br>" +
      "Please input 'stone', 'paper' or 'scissors' to play again!";
  }

  return myOutputValue;
};

// computer rolls randomly
var computerRoll = function () {
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.floor(randomNumber);
  var randomRoll = randomInteger + 1;
  console.log("Random Number 1-3");
  console.log(randomRoll);
  var computerRoll = "scissors";
  // Paper = 2
  if (randomRoll == 2) {
    computerRoll = "paper";
  }
  // Stone = 3
  if (randomRoll == 3) {
    computerRoll = "stone";
  }
  console.log("Computer's Roll");
  console.log(computerRoll);
  return computerRoll;
};
