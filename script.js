// Randomly select a choice for computer
var randomChoice = function () {
  var choiceNumber = Math.ceil(Math.random() * 3);
  if (choiceNumber == 1) {
    return "scissors";
  } else if (choiceNumber == 2) {
    return "paper";
  } else if (choiceNumber == 3) {
    return "stone";
  }
};

var main = function (input) {
  var computerChoice = randomChoice();
  var reverseCheck;

  if (input == "scissors" || input == "paper" || input == "stone") {
    reverseCheck = false;
  } else if (
    input == "reversed scissors" ||
    input == "reversed paper" ||
    input == "reversed stone"
  ) {
    reverseCheck = true;
    if (input == "reversed scissors") {
      input = "scissors";
    } else if (input == "reversed paper") {
      input = "paper";
    } else if (input == "reversed stone") {
      input = "stone";
    }
  } else {
    return `"${input}" is not an option. Please enter either "scissors", "paper", or "stone" (lower case).`;
  }

  var scoring = compareWinner(input, computerChoice, reverseCheck);
  var myOutputValue = outputMessage(scoring, input, computerChoice);

  return myOutputValue;
};

// Output message
var outputMessage = function (score, userChoice, computerChoice) {
  if (score == 0) {
    return `You chose ${userChoice}. <br> The computer chose ${computerChoice}. <br><br> It's a draw!`;
  } else if (score == 1) {
    return `You chose ${userChoice}. <br> The computer chose ${computerChoice}. <br><br> You win!`;
  } else if (score == -1) {
    return `You chose ${userChoice}. <br> The computer chose ${computerChoice}. <br><br> You lose!`;
  }
};

// Compare user's choice vs computer's choice
var compareWinner = function (user, computer, reversed) {
  if (user == computer) {
    return 0;
  } else if (
    (user == "scissors" && computer == "paper") ||
    (user == "paper" && computer == "stone") ||
    (user == "stone" && computer == "scissors")
  ) {
    if (reversed) {
      return -1;
    } else {
      return 1;
    }
  } else {
    if (reversed) {
      return 1;
    } else {
      return -1;
    }
  }
};
