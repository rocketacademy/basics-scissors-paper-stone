var getRandomSelection = function () {
  var randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return scissors;
  }
  if (randomNum == 1) {
    return paper;
  }
  return stone;
};

var main = function (playerInput) {
  var computerInput = "";
  computerInput = getRandomSelection();
  console.log("computer input", computerInput);
  var myOutputValue = "";

  if (
    playerInput != "scissors" &&
    playerInput != "paper" &&
    playerInput != "stone"
  ) {
    myOutputValue = `Please type either 'scissors', 'paper' or 'stone' to start the game.`;
  } else if (playerInput == computerInput) {
    myOutputValue = `You have input ${playerInput} and computer has input ${computerInput}. It's a draw.`;
  } else if (
    (playerInput == "scissors" && computerInput == "paper") ||
    (playerInput == "paper" && computerInput == "stone") ||
    (playerInput == "stone" && computerInput == "scissors")
  ) {
    myOutputValue = `You have input ${playerInput} and computer has input ${computerInput}. You won!`;
  } else {
    myOutputValue = `You have input ${playerInput} and computer has input ${computerInput}. You lost. Try again!`;
  }
  return myOutputValue;
};
