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
  if (randomValue == 3) {
    return "stone";
  }
};

var main = function (input) {
  // generate value when submit button is clicked
  var compHand = getRandomValue();
  console.log(compHand);

  // set display message if user lost
  var myOutputValue = `You threw ${input}.<br> The computer threw ${compHand}.<br> Sorry, you lost!<br><br>Enter "scissors" "paper" or "stone" to play another round!`;

  // input validation
  if (
    input != "scissors" ||
    input != "paper" ||
    input != "stone" ||
    input != "reversed scissors" ||
    input != "reversed paper" ||
    input != "reversed stone"
  ) {
    // set display message if input validation not met
    myOutputValue = `Please enter "scissors" "paper" or "stone" to start playing!
    <br><br> Like a challenge? <br>Begin your entry with "reversed"<space> to try your hand at a reversed Scissors Paper Stone game!`;
  }

  // check if user draw
  if (input == compHand || input == "reversed ${getRandomValue}") {
    // set display message if user draw
    return `You threw ${input}.<br> The computer threw ${compHand}.<br> Bummer, it's a draw!<br><br>Enter "scissors" "paper" or "stone" to play another round!`;
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
    return `You threw ${input}.<br> The computer threw ${compHand}.<br> Congratulations, you won!<br><br>Enter "scissors" "paper" or "stone" to play another round!`;
  }

  return myOutputValue;
};
