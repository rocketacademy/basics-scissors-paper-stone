var playerWins = 0;
var computerWins = 0;
var userName = "";

var main = function (input) {
  if (userName == "") {
    if (input == "") {
      myOutputValue = "Please enter your username!";
    }
    if (input !== "") {
      userName = input;
      myOutputValue =
        "Welcome, " +
        userName +
        "! Enter scissors, paper, or stone to start playing!";
    }
  }
  var computerHand = randomHandSign();
  if (
    (input == "scissors" && computerHand == "stone") ||
    (input == "paper" && computerHand == "scissors") ||
    (input == "stone" && computerHand == "paper")
  ) {
    computerWins = computerWins + 1;
    if (playerWins >= computerWins) {
      myOutputValue =
        "You lose! You chose " +
        input +
        " and the computer chose " +
        computerHand +
        "<br><br> Type 'scissors', 'paper', or 'stone' to play another round!" +
        "<br><br> You've won " +
        playerWins +
        " time(s) and the computer has won " +
        computerWins +
        " time(s)! Keep it up, " +
        userName +
        "!";
    }
    if (playerWins < computerWins) {
      myOutputValue =
        "You lose! You chose " +
        input +
        " and the computer chose " +
        computerHand +
        "<br><br> Type 'scissors', 'paper', or 'stone' to play another round!" +
        "<br><br> You've won " +
        playerWins +
        " time(s) and the computer has won " +
        computerWins +
        " time(s)! Try harder, " +
        userName +
        "!";
    }
  }
  if (
    (input == "scissors" && computerHand == "paper") ||
    (input == "paper" && computerHand == "stone") ||
    (input == "stone" && computerHand == "scissors")
  ) {
    playerWins = playerWins + 1;
    if (playerWins >= computerWins) {
      myOutputValue =
        "You win! You chose " +
        input +
        " and the computer chose " +
        computerHand +
        "<br><br> Type 'scissors', 'paper', or 'stone' to play another round!" +
        "<br><br> You've won " +
        playerWins +
        " time(s) and the computer has won " +
        computerWins +
        " time(s)! Keep it up, " +
        userName +
        "!";
    }
    if (playerWins < computerWins) {
      myOutputValue =
        "You win! You chose " +
        input +
        " and the computer chose " +
        computerHand +
        "<br><br> Type 'scissors', 'paper', or 'stone' to play another round!" +
        "<br><br> You've won " +
        playerWins +
        " time(s) and the computer has won " +
        computerWins +
        " time(s)! Try harder, " +
        userName +
        "!";
    }
  }
  if (
    (input == "scissors" && computerHand == "scissors") ||
    (input == "paper" && computerHand == "paper") ||
    (input == "stone" && computerHand == "stone")
  ) {
    if (playerWins >= computerWins) {
      myOutputValue =
        "It's a draw! You chose " +
        input +
        " and the computer chose " +
        computerHand +
        "<br><br> Type 'scissors', 'paper', or 'stone' to play another round!" +
        "<br><br> You've won " +
        playerWins +
        " time(s) and the computer has won " +
        computerWins +
        " time(s)! Keep it up, " +
        userName +
        "!";
    }
    if (playerWins < computerWins) {
      myOutputValue =
        "It's a draw! You chose " +
        input +
        " and the computer chose " +
        computerHand +
        "<br><br> Type 'scissors', 'paper', or 'stone' to play another round!" +
        "<br><br> You've won " +
        playerWins +
        " time(s) and the computer has won " +
        computerWins +
        " time(s)! Try harder, " +
        userName +
        "!";
    }
  }
  return myOutputValue;
};

var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var randomHandSign = function () {
  var numHandSigns = 3;
  var randomNum = generateRandomInteger(numHandSigns);
  if (randomNum == 1) {
    return "scissors";
  }
  if (randomNum == 2) {
    return "paper";
  }
  if (randomNum == 3) {
    return "stone";
  }
};
