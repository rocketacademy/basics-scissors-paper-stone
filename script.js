// generate random number
var getRandomNumber = function () {
  // generate random whole number from 1 to 3
  var setRandomInteger = Math.floor(Math.random() * 3) + 1;
  return setRandomInteger;
};

// generate random game values
var getRandomValue = function () {
  var randomValue = getRandomNumber();
  // assign number to game values
  if (randomValue == 1) {
    return "scissors";
  }
  if (randomValue == 2) {
    return "paper";
  }
  return "stone";
};

var main = function (input) {
  // generate value when submit button is clicked
  var compHand = getRandomValue();
  console.log(compHand);

  // input validation
  if (
    input !== "scissors" ||
    input !== "paper" ||
    input !== "stone" ||
    input !== "reversed scissors" ||
    input !== "reversed paper" ||
    input !== "reversed stone"
  ) {
    // set display message if input validation not met
    var myOutputValue = `Please enter "scissors" "paper" or "stone" to start playing!
    <br><br> Like a challenge? <br>Begin your entry with "reversed"<space> to try your hand at a reversed Scissors Paper Stone game!`;
  }

  // check if user draw
  if (input == compHand || input == `reversed ${compHand}`) {
    // set display message if user draw
    myOutputValue = `You threw ${input}.<br> The computer threw ${compHand}.<br> Bummer, it's a draw!<br><br>Enter "scissors" "paper" or "stone" to play another round!`;
  }

  // check if user won
  if (
    (input == "reversed paper" && compHand == "scissors") ||
    (input == "reversed stone" && compHand == "paper") ||
    (input == "reversed scissors" && compHand == "stone") ||
    (input == "scissors" && compHand == "paper") ||
    (input == "paper" && compHand == "stone") ||
    (input == "stone" && compHand == "scissors")
  ) {
    // set display message if user won
    myOutputValue = `You threw ${input}.<br> The computer threw ${compHand}.<br> Congratulations, you won!<br><br>Enter "scissors" "paper" or "stone" to play another round!`;
  }

  // set display message if user lost
  if (
    (input == "reversed scissors" && compHand == "paper") ||
    (input == "reversed paper" && compHand == "stone") ||
    (input == "reversed stone" && compHand == "scissors") ||
    (input == "paper" && compHand == "scissors") ||
    (input == "stone" && compHand == "paper") ||
    (input == "scissors" && compHand == "stone")
  ) {
    myOutputValue = `You threw ${input}.<br> The computer threw ${compHand}.<br> Sorry, you lost!<br><br>Enter "scissors" "paper" or "stone" to play another round!`;
  }
  return myOutputValue;
};
