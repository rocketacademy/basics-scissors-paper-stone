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
    " <br><br> You chose " +
    input +
    ".<br><br>" +
    "You lose! Bummer.Now you can type 'scissors' 'paper' or 'stone' to play another round!";

  if (
    (input == "scissors" && computerchoice == "paper") ||
    (input == "paper" && computerchoice == "stone") ||
    (input == "stone" && computerchoice == "scissors")
  ) {
    var myOutputValue =
      "The computer chose " +
      computerchoice +
      "  <br><br> You chose " +
      input +
      ".<br><br>" +
      "You Win! Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  }

  return myOutputValue;
};

function randomObject() {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var objectNumber = randomInteger + 1;
  return objectNumber;
}
