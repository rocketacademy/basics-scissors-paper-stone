var main = function (input) {
  var myOutputValue = "Only Scissors, Paper or Stone! <br> Try again";
  var computerchose = computermove();
  console.log("any move?");
  console.log(computerchose);

  // Tied Grouping
  if (input == computerchose) {
    myOutputValue =
      "You used " +
      input +
      " and Computer used " +
      computerchose +
      ". <br> Its a tie!";
  }

  // Win Grouping
  if (
    (input == "Scissors" && computerchose == "Paper") ||
    (input == "Paper" && computerchose == "Stone") ||
    (input == "Stone" && computerchose == "Scissors")
  ) {
    myOutputValue =
      "You used " +
      input +
      " and Computer used " +
      computerchose +
      ". <br> You WIN!!!";
  }

  // Lose Grouping
  if (
    (input == "Scissors" && computerchose == "Stone") ||
    (input == "Paper" && computerchose == "Scissors") ||
    (input == "Stone" && computerchose == "Paper")
  ) {
    myOutputValue =
      "You used " +
      input +
      " and Computer used " +
      computerchose +
      ". <br> You Lose :(";
  }
  return myOutputValue;
};

// Using math random to generate computer's move
// convert the computer's move in numbers to SPS.
var computermove = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var computernumber = randomInteger + 1;
  console.log("Computer generated number");
  console.log(computernumber);

  if (computernumber == 1) {
    computeroutput = "Scissors";
  }
  if (computernumber == 2) {
    computeroutput = "Paper";
  }
  if (computernumber == 3) {
    computeroutput = "Stone";
  }
  console.log("===== Computer used =====");
  console.log(computeroutput);
  return computeroutput;
};
