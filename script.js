var main = function (input) {
  var myOutputValue = computersChoice;

  // All win cases:
  if (
    (input == "scissors" && computersChoice == "paper") ||
    (input == "reversed stone" && computersChoice == "paper")
  ) {
    return `You threw ${input} and computer threw ${computersChoice}. You win!`;
  }

  if (
    (input == "paper" && computersChoice == "stone") ||
    (input == "reversed scissors" && computersChoice == "stone")
  ) {
    return `You threw ${input} and computer threw ${computersChoice}. You win!`;
  }

  if (
    (input == "stone" && computersChoice == "scissors") ||
    (input == "reversed paper" && computersChoice == "scissors")
  ) {
    return `You threw ${input} and computer threw ${computersChoice}. You win!`;
  }

  // All draw cases:
  if (input == computersChoice) {
    return `You threw ${input} and computer threw ${computersChoice}. It's a draw!`;
  }

  if (input == "reversed scissors" && computersChoice == "scissors") {
    return `You threw ${input} and computer threw ${computersChoice}. It's a draw!`;
  }

  if (input == "reversed paper" && computersChoice == "paper") {
    return `You threw ${input} and computer threw ${computersChoice}. It's a draw!`;
  }

  if (input == "reversed stone" && computersChoice == "stone") {
    return `You threw ${input} and computer threw ${computersChoice}. It's a draw!`;
  }

  // All lose cases:
  if (
    (input == "scissors" && computersChoice == "stone") ||
    (input == "reversed paper" && computersChoice == "stone")
  ) {
    return `You threw ${input} and computer threw ${computersChoice}. You lose!`;
  }

  if (
    (input == "paper" && computersChoice == "scissors") ||
    (input == "reversed stone" && computersChoice == "scissors")
  ) {
    return `You threw ${input} and computer threw ${computersChoice}. You lose!`;
  }

  if (
    (input == "stone" && computersChoice == "paper") ||
    (input == "reversed scissors" && computersChoice == "paper")
  ) {
    return `You threw ${input} and computer threw ${computersChoice}. You lose!`;
  } else {
    return `Sorry, you can only choose: <br>scissors,<br>or paper,<br>or stone,<br>or reversed scissors,<br>or reversed paper,<br>or reversed stone.<br>Try again.`;
  }
};

// List all possible moves by the computer
var words = ["scissors", "paper", "stone"];

// Create random numbers from 0 to 2
var number = Math.floor(Math.random() * 3);

// Randomize possible moves by the computer
var computersChoice = words[number];
