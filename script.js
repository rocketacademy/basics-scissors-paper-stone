var gameMode = "Scissors, Paper, Stone";

var main = function (input) {
  var computerchoice_nb = randomObject();
  var computerchoice = "";
  if (computerchoice_nb == 1) {
    computerchoice = "scissors";
  }
  if (computerchoice_nb == 2) {
    computerchoice = "paper";
  }
  if (computerchoice_nb == 3) {
    computerchoice = "stone";
  }

  var myOutputValue =
    "The computer chose " +
    computerchoice +
    " <br> You chose " +
    input +
    ".<br><br>" +
    "You lose! Bummer. <br><br>Now you can type 'scissors' 'paper' or 'stone' to play another round!";

  if (
    input != "scissors" &&
    input != "paper" &&
    input != "stone" &&
    input != "reversed scissors" &&
    input != "reversed paper" &&
    input != "reversed stone"
  ) {
    myOutputValue =
      "Invalid input!" +
      " <br> You chose " +
      input +
      ".<br><br>" +
      "Invalid! <br><br> Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  }

  if (
    (input == "scissors" && computerchoice == "paper") ||
    (input == "paper" && computerchoice == "stone") ||
    (input == "stone" && computerchoice == "scissors") ||
    (input == "reversed scissors" && computerchoice == "stone") ||
    (input == "reversed paper" && computerchoice == "scissors") ||
    (input == "reversed stone" && computerchoice == "paper")
  ) {
    myOutputValue =
      "The computer chose " +
      computerchoice +
      " <br> You chose " +
      input +
      ".<br><br>" +
      "You Win! <br><br> Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  }

  if (
    (input == "scissors" && computerchoice == "scissors") ||
    (input == "paper" && computerchoice == "paper") ||
    (input == "stone" && computerchoice == "stone") ||
    (input == "reversed scissors" && computerchoice == "scissors") ||
    (input == "reversed paper" && computerchoice == "paper") ||
    (input == "reversed stone" && computerchoice == "stone")
  ) {
    myOutputValue =
      "DRAW! The computer chose " +
      computerchoice +
      " <br> You chose " +
      input +
      ".<br><br>" +
      "DRAW! <br><br> Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  }

  return myOutputValue;
};

function randomObject() {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var objectNumber = randomInteger + 1;
  return objectNumber;
}
