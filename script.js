var computerChoice = "";

var computerPlay = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  if (diceNumber == 1) {
    return (computerChoice = "Stone");
  }
  if (diceNumber == 2) {
    return (computerChoice = "Paper");
  }

  return (computerChoice = "Scissors");
};

var main = function (input) {
  if (input !== "Stone" && input !== "Paper" && input !== "Scissors") {
    var myOutputValue = "Please enter Stone, Paper, or Scissors.";
    return myOutputValue;
  }

  computerChoice = computerPlay();

  var Result = "It's a draw.";

  if (input == "Stone" && computerChoice == "Paper") {
    var Result = "You Lost.";
  }

  if (input == "Stone" && computerChoice == "Scissors") {
    var Result = "You Won.";
  }

  if (input == "Scissors" && computerChoice == "Stone") {
    var Result = "You Lost.";
  }

  if (input == "Scissors" && computerChoice == "Paper") {
    var Result = "You Won.";
  }

  if (input == "Paper" && computerChoice == "Stone") {
    var Result = "You Won.";
  }

  if (input == "Paper" && computerChoice == "Scissors") {
    var Result = "You Lost.";
  }

  var myOutputValue =
    "The computer chose " +
    computerChoice +
    " and you chose " +
    input +
    ". " +
    Result;
  return myOutputValue;
};
