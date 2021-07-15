var main = function (input) {
  var myOutputValue = `You threw ${input}, the computer chose ${randomComputerMove}.`;

  // When player throws scissors or reversed scissors
  if (
    (input == "scissors" && randomComputerMove == "scissors") ||
    (input == "reversed scissors" && randomComputerMove == "scissors")
  ) {
    myOutputValue = myOutputValue + ` It is a draw!`;
    return myOutputValue;
  }
  if (
    (input == "scissors" && randomComputerMove == "paper") ||
    (input == "reversed scissors" && randomComputerMove == "stone")
  ) {
    myOutputValue = myOutputValue + ` You won!`;
    return myOutputValue;
  }
  if (
    (input == "scissors" && randomComputerMove == "stone") ||
    (input == "reversed scissors" && randomComputerMove == "paper")
  ) {
    myOutputValue = myOutputValue + ` You lost!`;
    return myOutputValue;
  }
  // When player throws paper or reversed paper
  if (
    (input == "paper" && randomComputerMove == "scissors") ||
    (input == "reversed paper" && randomComputerMove == "stone")
  ) {
    myOutputValue = myOutputValue + ` You lost!`;
    return myOutputValue;
  }
  if (
    (input == "paper" && randomComputerMove == "paper") ||
    (input == "reversed paper" && randomComputerMove == "paper")
  ) {
    myOutputValue = myOutputValue + ` It is a draw!`;
    return myOutputValue;
  }
  if (
    (input == "paper" && randomComputerMove == "stone") ||
    (input == "reversed paper" && randomComputerMove == "scissors")
  ) {
    myOutputValue = myOutputValue + ` You won!`;
    return myOutputValue;
  }
  // When player throws stone or reversed stone
  if (
    (input == "stone" && randomComputerMove == "scissors") ||
    (input == "reversed stone" && randomComputerMove == "paper")
  ) {
    myOutputValue = myOutputValue + ` You won!`;
    return myOutputValue;
  }
  if (
    (input == "stone" && randomComputerMove == "paper") ||
    (input == "reversed stone" && randomComputerMove == "scissors")
  ) {
    myOutputValue = myOutputValue + ` You lost!`;
    return myOutputValue;
  }
  if (
    (input == "stone" && randomComputerMove == "stone") ||
    (input == "reversed stone" && randomComputerMove == "stone")
  ) {
    myOutputValue = myOutputValue + ` It is a draw!`;
    return myOutputValue;
  } else {
    return `You can only input: <br> "scissors" <br> "paper" <br> "stone" <br> "reversed scissors" <br> "reversed paper" or <br> "reversed stone". <br> You have input something else, please try again!`;
  }
};
// List possible moves computer can make
var allComputerMoves = ["scissors", "paper", "stone"];

// Generate a random integer from 0 to 2 inclusive
var generateRandomInteger = Math.floor(Math.random() * 3);

// Randomise possible moves computer can make
var randomComputerMove = allComputerMoves[generateRandomInteger];
