var main = function (input) {
  // to run function of generating random hand
  var compHand = randomValue();
  console.log(compHand);
  // input validation if input is not scissors paper or stone
  if (
    input != "scissors" ||
    input != "paper" ||
    input != "stone" ||
    input != "reversed scissors" ||
    input != "reversed paper" ||
    input != "reversed stone"
  ) {
    myOutputValue = `Please enter "scissors" "paper" or "stone" to start playing!
    <br><br> Like a challenge? <br>Begin your entry with "reversed"<space> to try your hand at a reversed Scissors Paper Stone game!`;
  }

  // if input is same as comp = draw
  if (input == compHand || input == "reversed " + compHand) {
    myOutputValue = `You threw ${input}.<br> The computer threw ${compHand}.<br> Bummer, it's a draw!<br><br>Enter "scissors" "paper" or "stone" to play another round!`;
  }

  // REVERSE GAMEPLAY
  if (
    input == "reversed scissors" ||
    input == "reversed paper" ||
    input == "reversed stone"
  ) {
    //game rules for losing hand
    if (
      (input == "reversed scissors" && compHand == "paper") ||
      (input == "reversed paper" && compHand == "stone") ||
      (input == "reversed stone" && compHand == "scissors")
    ) {
      myOutputValue = `You threw ${input}.<br> The computer threw ${compHand}.<br> Sorry, you lost!<br><br>Enter "scissors" "paper" or "stone" to play another round!`;
    }
    // game rules for winning hand
    if (
      (input == "reversed paper" && compHand == "scissors") ||
      (input == "reversed stone" && compHand == "paper") ||
      (input == "reversed scissors" && compHand == "stone")
    ) {
      myOutputValue = `You threw ${input}.<br> The computer threw ${compHand}.<br> Congratulations, you won!<br><br>Enter "scissors" "paper" or "stone" to play another round!`;
    }
  }

  // NORMAL GAMEPLAY
  // game rules for winning hands
  if (
    (input == "scissors" && compHand == "paper") ||
    (input == "paper" && compHand == "stone") ||
    (input == "stone" && compHand == "scissors")
  ) {
    myOutputValue = `You threw ${input}.<br> The computer threw ${compHand}.<br> Congratulations, you won!<br><br>Enter "scissors" "paper" or "stone" to play another round!`;
  }
  // game rules for losing hands
  if (
    (input == "paper" && compHand == "scissors") ||
    (input == "stone" && compHand == "paper") ||
    (input == "scissors" && compHand == "stone")
  ) {
    myOutputValue = `You threw ${input}.<br> The computer threw ${compHand}.<br> Sorry, you lost!<br><br>Enter "scissors" "paper" or "stone" to play another round!`;
  }

  return myOutputValue;
};

// function to generate random game values in output
var randomValue = function (input) {
  var gameValues = ["scissors", "paper", "stone"],
    randomGen = gameValues[Math.floor(Math.random() * gameValues.length)];
  // console.log(gameValues);
  return randomGen;
};

// if entry starts with reversed, then follow below, else
