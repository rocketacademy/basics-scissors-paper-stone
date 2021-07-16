var main = function (input) {
  var randomHand = calRandomHand();
  var myOutputValue =
    " You picked " +
    input +
    " whereas we picked " +
    randomHand +
    " You lost, please try again!";

  if (calRandomHand() == "Paper" && input == "Scissors") {
    return "You Won!";
  }
  if (calRandomHand() == "Scissors" && input == "Stone") {
    return "You Won!";
  }
  if (calRandomHand() == "Stone" && input == "Paper") {
    return "You Won!";
  }
  if (input == "Scissors" && calRandomHand() == "Paper") {
    return "You Won!";
  }
  if (input == "Paper" && calRandomHand() == "Stone") {
    return "You Won!";
  }
  if (input == "Stone" && calRandomHand() == "Scissors") {
    return "You Won!";
  }
  if (input == calRandomHand()) {
    return "DRAW";
  }
  if (input !== "Scissors" || input !== "Paper" || input !== "Stone") {
    return "Please input Scissors Paper or Stone, all other values are void";
  }
  return myOutputValue;
};

var calRandomNum = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};

var calRandomHand = function () {
  var totalNumVariables = 3;
  var randomVariable = calRandomNum(totalNumVariables);

  if (randomVariable == 1) {
    return "Scissors";
  }
  if (randomVariable == 2) {
    return "Stone";
  }
  if (randomVariable == 3) {
    return "Paper";
  }
  return "Please try again.";
};
