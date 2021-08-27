var paper = "paper";
var scissors = "scissors";
var rock = "stone";

var randomDigits = function () {
  var randomDecimal = Math.random() * 4;
  var randomInteger = Math.floor(randomDecimal);
  var random = randomInteger;
  console.log(random);
  return random;
};

var randomOutput = function () {
  var randomoutputs = randomDigits();
  if (randomoutputs == 1) return scissors;
  if (randomoutputs == 2) return paper;
  if (randomoutputs == 3) return rock;
};

var programStatus = function (input) {
  var randomProgramOutput = randomOutput();
  if (input == randomProgramOutput) return "Tie";
  if (input == rock && randomProgramOutput == paper) return "The program won";
  if (input == paper && randomProgramOutput == scissors)
    return "The program won";
  if (input == scissors && randomProgramOutput == rock)
    return "The program won";
  return "You lose";
};

var main = function (input) {
  return programStatus(input);
};
