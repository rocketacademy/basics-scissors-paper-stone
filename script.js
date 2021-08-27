var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";

var main = function (input) {
  var myOutputValue = getResults(input);
  return myOutputValue;
};

var getRandomObject = function () {
  var randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return SCISSORS;
  }
  if (randomNum == 1) {
    return PAPER;
  }
  if (randomNum == 2) {
    return STONE;
  }
};

var output = getRandomObject();
console.log("output", output);

var getResults = function (guess) {
  if (output == guess) {
    return "draw!";
  }
  if (output == "rock" && guess == "scissors") {
    return "Win!";
  }
  if (output == "rock" && guess == "paper") {
    return "lose!";
  }
  if (output == "paper" && guess == "rock") {
    return "Win!";
  }
  if (output == "paper" && guess == "scissors") {
    return "lose!";
  }
  if (output == "scissors" && guess == "paper") {
    return "Win!";
  }
  if (output == "scissors" && guess == " rock") {
    return "lose!";
  }
};
