//Program randomly choose scissors, paper or stone
var myArray = ["Scissors", "Paper", "Stone"];
var randomItem = function () {
  var randomObject = myArray[Math.floor(Math.random() * myArray.length)];
  return randomObject;
};

var sps = function (userInput) {
  var programmeInput = randomItem();

  //user won
  if (
    (userInput == "Scissors" && programmeInput == "Paper") ||
    (userInput == "Stone" && programmeInput == "Scissors") ||
    (userInput == "Paper" && programmeInput == "Stone")
  ) {
    return "you won";
  }

  //program won
  else if (
    (userInput == "Paper" && programmeInput == "Scissors") ||
    (userInput == "Scissors" && programmeInput == "Stone") ||
    (userInput == "Stone" && programmeInput == "Paper")
  ) {
    return "you lose";
  }

  //draw
  else {
    return "it's a draw";
  }
};

var main = function (input) {
  if (input != "Scissors" && input != "Paper" && input != "Stone") {
    var myOutputValue =
      "Please choose the 3 valid input options which are Scissors, Paper or Stone";
    return myOutputValue;
  } else {
    return sps(input);
  }
};
