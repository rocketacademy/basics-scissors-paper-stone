//Player Name
var playerName = " ";
var mode = "input username";

// Player Win Loss Draw number
var playerWins = 0;
var playerLosses = 0;
var playerDraws = 0;

// Players Inputs
var scissors = "scissors";
var paper = "paper";
var stone = "stone";

//computer randomly choose scissors paper or stone
var getRandomNum = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNum = randomInteger + 1;
  return randomNum;
};
var assignedNumToWord = function () {
  var randomNum = getRandomNum();
  if (randomNum == 1) return scissors;
  if (randomNum == 2) return paper;
  if (randomNum == 3) return stone;
};

// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If same object draw
var main = function (input) {
  if (mode == "input username") {
    playerName = input;
    mode = "play sps";
    return (
      "Welcome " + playerName + ", please enter scissors, paper or stone. "
    );
  }
  if (mode == "play sps") {
    var computersRandomWord = assignedNumToWord();
    console.log(computersRandomWord, input);
    if (input == computersRandomWord) {
      playerDraws = playerDraws + 1;
      myOutputValue = " You Drawed. ";
    }
    if (
      (input == scissors && computersRandomWord == paper) ||
      (input == paper && computersRandomWord == stone) ||
      (input == stone && computersRandomWord == scissors)
    ) {
      playerWins = playerWins + 1;
      console.log(playerWins, playerLosses, playerDraws);
      myOutputValue = " You Win! ";
    }
    if (
      (input == scissors && computersRandomWord == stone) ||
      (input == paper && computersRandomWord == scissors) ||
      (input == stone && computersRandomWord != paper)
    ) {
      playerLosses = playerLosses + 1;
      myOutputValue = " You Lose. ";
    }
    if (input != scissors && input != paper && input != stone) {
      return " Please only input scissors, paper or stone. ";
    } else
      return (
        "Hi " +
        playerName +
        "!" +
        "<br><br>" +
        "The computer chose " +
        computersRandomWord +
        " ,you chose " +
        input +
        "." +
        "<br>" +
        myOutputValue +
        "<br><br>" +
        " You have won " +
        playerWins +
        " times." +
        " You have lost " +
        playerLosses +
        " times." +
        " You have drawed " +
        playerDraws +
        " times."
      );
  }
};
