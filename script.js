var gameStatus = "enter username";
var userName = "";
var myOutputValue = "Please enter your username";
var numberOfWins = 0;
var numberOfGames = 0;

var generateRandomInteger = function () {
  var randomDec = Math.random() * 3;
  var randomNum = Math.ceil(randomDec);

  console.log(randomNum);
  return randomNum;
};

var randomScissorPaperStone = function () {
  var Num = generateRandomInteger();

  if (Num == 1) {
    return "scissors";
  }

  if (Num == 2) {
    return "paper";
  }

  if (Num == 3) {
    return "stone";
  }
};

var generateResult = function (userPlays, computerPlays) {
  var result = "Please enter scissors, paper or stone";

  if (userPlays == computerPlays) {
    result = "It's a tie!";
  }

  if (userPlays == "scissor" && computerPlays == "paper") {
    result = "You win!";
    numberOfWins += 1;
  }

  if (userPlays == "scissors" && computerPlays == "stone") {
    result = "You lose!";
  }

  if (userPlays == "paper" && computerPlays == "stone") {
    result = "You win!";
    numberOfWins += 1;
  }

  if (userPlays == "paper" && computerPlays == "scissors") {
    result = "You lose!";
  }

  if (userPlays == "stone" && computerPlays == "scissors") {
    result = "You win!";
    numberOfWins += 1;
  }

  if (userPlays == "stone" && computerPlays == "paper") {
    result = "You lose!";
  }

  return result;
};

var main = function (input) {
  if (gameStatus == "enter username") {
    userName = input;
    gameStatus = "game mode";
    myOutputValue =
      "Hello " + userName + "! Let's play! Enter scissors, paper or stone.";
  } else if (gameStatus == "game mode") {
    var computerPlays = randomScissorPaperStone();
    var result = generateResult(input, computerPlays);
    numberOfGames += 1;
    myOutputValue =
      "The computer played: " +
      computerPlays +
      ".<br>" +
      "You played: " +
      input +
      ".<br>" +
      result +
      ".<br>" +
      "So far " +
      userName +
      ", you've won " +
      numberOfWins +
      "/" +
      numberOfGames +
      "turns. Keep going!";
  } else {
    myOutputValue = "There is an error.";
  }

  return myOutputValue;
};
