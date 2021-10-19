var gameStatus = "enter username";
var userName = "";
var myOutputValue = "Please enter your username";
var numberOfWins = 0;
var numberOfGames = 0;

var generateRandomInteger = function () {
  var randomDec = Math.random() * 3;
  var randomNum = Math.ceil(randomDec);

  return randomNum;
};

var randomScissorPaperStone = function () {
  var Num = generateRandomInteger();

  if (Num == 1) {
    return "scissors";
  } else if (Num == 2) {
    return "paper";
  } else if (Num == 3) {
    return "stone";
  }
};

var generateResult = function (userPlays, computerPlays) {
  var result = "Please enter scissors, paper or stone";

  if (userPlays == computerPlays) {
    result = "It's a tie!";
  } else if (
    (userPlays == "scissor" && computerPlays == "paper") ||
    (userPlays == "paper" && computerPlays == "stone") ||
    (userPlays == "stone" && computerPlays == "scissors")
  ) {
    result = "You win!";
    numberOfWins++;
    numberOfGames++;
  } else if (
    (userPlays == "scissors" && computerPlays == "stone") ||
    (userPlays == "paper" && computerPlays == "scissors") ||
    (userPlays == "stone" && computerPlays == "paper")
  ) {
    result = "You lose!";
    numberOfGames++;
  }

  return result;
};

var main = function (input) {
  if (gameStatus == "enter username") {
    userName = input;
    gameStatus = "game mode";
    myOutputValue =
      "Hello " + userName + "! Let's play! Enter scissors, paper or stone.";
  } else if (gameStatus == "game mode" && input == "reset") {
    numberOfWins = 0;
    numberOfGames = 0;
    myOutputValue = "The counter has resetted";
  } else if (gameStatus == "game mode") {
    var computerPlays = randomScissorPaperStone();
    var result = generateResult(input, computerPlays);
    myOutputValue =
      "The computer played: " +
      computerPlays +
      ".<br>" +
      "You played: " +
      input +
      ".<br>" +
      result +
      "<br>" +
      "So far " +
      userName +
      ", you've won " +
      numberOfWins +
      "/" +
      numberOfGames +
      "turns. Keep going! <br>Enter 'reset' to reset the counter.";
  } else {
    myOutputValue = "There is an error.";
  }

  return myOutputValue;
};
