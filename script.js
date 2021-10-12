// Basic Scissors Paper Stone (reversed)

var guess_scissors = `scissors`;
var guess_paper = `paper`;
var guess_stone = `stone`;

var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var generateRandomGuess = function () {
  var totalNumGuess = 3;
  var randomGuessNum = generateRandomInteger(totalNumGuess);
  if (randomGuessNum == 1) {
    return guess_scissors;
  }
  if (randomGuessNum == 2) {
    return guess_paper;
  }
  if (randomGuessNum == 3) {
    return guess_stone;
  }
};

var main = function (input) {
  var programHas = generateRandomGuess();

  var myOutputValue = `try again! do "scissors", "paper", or "stone" only.`;

  if (
    (input == "scissors" && guess_scissors == programHas) ||
    (input == "paper" && guess_paper == programHas) ||
    (input == "stone" && guess_stone == programHas)
  ) {
    myOutputValue = `you have ${input} & the program has ${programHas} so a draw.`;
  }

  if (
    (input == "scissors" && guess_paper == programHas) ||
    (input == "paper" && guess_stone == programHas) ||
    (input == "stone" && guess_scissors == programHas)
  ) {
    myOutputValue = `you have ${input} & the program has ${programHas} so you lose.`;
  }

  if (
    (input == "scissors" && guess_stone == programHas) ||
    (input == "paper" && guess_scissors == programHas) ||
    (input == "stone" && guess_paper == programHas)
  ) {
    myOutputValue = `you have ${input} & the program has ${programHas} so you win.`;
  }

  return myOutputValue;
};
