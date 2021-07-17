var main = function (input) {
  var randomHand = calRandomHand();
  console.log(randomHand);

  var myOutputValue =
    " You picked " +
    input +
    "<br></br>" +
    " whereas we picked " +
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
    return "You Won!";
  }

  if (input !== "Scissors" && input !== "Paper" && input !== "Stone") {
    return "Please input Scissors Paper or Stone, all other values are void";
  }

  if (input == randomHand) {
    return "DRAW";
  }

  if (
    (input == " reversed Paper " && randomHand == "Paper") ||
    (input == " reversed Scissors " && randomHand == "Scissors") ||
    (input == " reversed Stone " && randomHand == "Stone")
  ) {
    return "DRAW";
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
