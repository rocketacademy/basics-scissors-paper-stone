var scissors = "scissors";
var stone = "stone";
var paper = "paper";

var main = function (inputSign) {
  var resultOfComputerSign = computerSign();
  if (inputSign == resultOfComputerSign) {
    var myOutputValue =
      "It's a draw! Computer selected " + inputSign + "<br> Try again!";
    return myOutputValue;
  }
  if (
    (inputSign == "scissors" && resultOfComputerSign == stone) ||
    (inputSign == "stone" && resultOfComputerSign == paper) ||
    (inputSign == "paper" && resultOfComputerSign == scissors)
  ) {
    var myOutputValue =
      "Computer selected " +
      resultOfComputerSign +
      " you lose! <br> Try again!";
    return myOutputValue;
  }
  if (
    (inputSign == "scissors" && resultOfComputerSign == paper) ||
    (inputSign == "stone" && resultOfComputerSign == scissors) ||
    (inputSign == "paper" && resultOfComputerSign == stone)
  ) {
    var myOutputValue =
      "Computer selected " +
      resultOfComputerSign +
      " you win! <br> Try and Win again!";
    return myOutputValue;
  }
  if (
    (inputSign == "reversed scissors" && resultOfComputerSign == stone) ||
    (inputSign == "reversed stone" && resultOfComputerSign == paper) ||
    (inputSign == "reversed paper" && resultOfComputerSign == scissors)
  ) {
    var myOutputValue =
      "Computer selected " +
      resultOfComputerSign +
      " you win! <br> Try and Win again!";
    return myOutputValue;
  }
  if (
    (inputSign == "reversed scissors" && resultOfComputerSign == paper) ||
    (inputSign == "reversed stone" && resultOfComputerSign == scissors) ||
    (inputSign == "reversed paper" && resultOfComputerSign == stone)
  ) {
    var myOutputValue =
      "Computer selected " +
      resultOfComputerSign +
      " you lose! <br> Try again!";
    return myOutputValue;
  }
  var myOutputValue =
    "Please input either scissors, stone, or paper. <br> Try again!";
  return myOutputValue;
};

var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumberResult = randomInteger + 1;
  return randomNumberResult;
};

var computerSign = function () {
  var assignRandomNumberResult = randomNumber();
  if (assignRandomNumberResult == 1) {
    return scissors;
  }
  if (assignRandomNumberResult == 2) {
    return stone;
  }
  return paper;
};
