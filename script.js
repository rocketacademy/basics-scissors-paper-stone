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
  if (randomNum == 1) return "scissors";
  if (randomNum == 2) return "paper";
  if (randomNum == 3) return "stone";
};

// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If same object draw

var main = function (input) {
  var computersRandomWord = assignedNumToWord();
  console.log(computersRandomWord, input);
  if (input == computersRandomWord) {
    var myOutputValue = " Draw ";
  }
  if (
    (input == scissors && computersRandomWord == "paper") ||
    (input == paper && computersRandomWord == "stone") ||
    (input == stone && computersRandomWord == "scissors")
  ) {
    var myOutputValue = " Win ";
  }
  if (
    (input == scissors && computersRandomWord == "stone") ||
    (input == paper && computersRandomWord == "scissors") ||
    (input == stone && computersRandomWord != "paper")
  ) {
    var myOutputValue = " Lose ";
  }
  if (input != scissors && input != paper && input != stone) {
    var myOutputValue = " Please only input scissors, paper or stone. ";
  }
  return myOutputValue;
};
