var main = function (input) {
  var randomHand = calRandomHand();
  console.log(randomHand);

  var myOutputValue =
    " You picked " +
    input +
    "<br></br>" +
    " Whereas we picked " +
    randomHand +
    "<br></br>" +
    " You lost, please try again!";

  if (
    (randomHand == "Paper" && input == "Scissors") ||
    (randomHand == "Scissors" && input == "Stone") ||
    (randomHand == "Stone" && input == "Paper") ||
    (input == " reversed Scissors" && randomHand == "Stone") ||
    (input == "reversed Paper" && randomHand == "Scissors") ||
    (input == "reversed Stone" && randomHand == "Paper")
  ) {
    myOutputValue = "You Won!";
  }

  if (input == randomHand) {
    myOutputValue = "DRAW!";
  } else if (input == "reversed Paper" && randomHand == "Paper") {
    myOutputValue = "DRAW";
  } else if (input == "reversed Scissors" && randomHand == "Scissors") {
    myOutputValue = "DRAW";
  } else if (input == "reversed Stone" && randomHand == "Stone") {
    myOutputValue = "DRAW";
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
