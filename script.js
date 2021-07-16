var main = function (input) {
  if (input !== "Scissors" && input !== "Paper" && input !== "Stone") {
    return "Oops, please enter a valid choice (Scissors / Paper / Stone) with the first letter capitalised";
  }
  var genRandomNumber = Math.floor(Math.random() * 3 + 1);
  console.log(input);
  console.log(genRandomNumber);

  // Computer choice
  var computerChoice = "Scissors";
  if (genRandomNumber == 1) {
    computerChoice = "Paper";
  }
  if (genRandomNumber == 2) {
    computerChoice = "Stone";
  }

  // Default lose unless fulfill win condition
  var myOutputValue = "You lose!";
  if (input == "Scissors") {
    if (computerChoice == "Paper") {
      myOutputValue = "You win!";
    }
  }

  if (input == "Paper") {
    if (computerChoice == "Stone") {
      myOutputValue = "You win!";
    }
  }

  if (input == "Stone") {
    if (computerChoice == "Scissors") {
      myOutputValue = "You win!";
    }
  }

  if (computerChoice == input) {
    myOutputValue = "DRAW!!";
  }

  // Add emoji
  if (computerChoice == "Scissors") {
    computerChoice = computerChoice + " ✂️";
  } else if (computerChoice == "Paper") {
    computerChoice = computerChoice + " 🧻";
  } else {
    computerChoice = computerChoice + " 🪨";
  }

  myOutputValue =
    myOutputValue +
    ` The computer used ${computerChoice}` +
    "<br><br> Enter (Scissors/Paper/Stone) to play another round!";
  return myOutputValue;
};
