var main = function (input) {
  var randomOutput = function () {
    var randomDecimal = Math.random() * 3;
    var randomInteger = Math.floor(randomDecimal);
    return randomInteger;
  };
  var randomNumber = randomOutput();
  console.log("random number", randomNumber);

  var computerPicks = "";

  if (randomNumber == 0) {
    computerPicks = "scissors";
  }
  if (randomNumber == 1) {
    computerPicks = "rock";
  }
  if (randomNumber == 2) {
    computerPicks = "paper";
  }

  console.log("computer picks", computerPicks);
  console.log("user input", input);
  var myOutputValue = "";

  if (
    (computerPicks == "scissors" && input == "paper") ||
    (computerPicks == "rock" && input == "scissors") ||
    (computerPicks == "paper" && input == "rock")
  ) {
    myOutputValue = `The computer chose ${computerPicks}. You chose ${input}. You Lost!`;
  }

  if (
    (computerPicks == "paper" && input == "scissors") ||
    (computerPicks == "scissors" && input == "rock") ||
    (computerPicks == "rock" && input == "paper")
  ) {
    myOutputValue = `The computer chose ${computerPicks}. You chose ${input}. You Won!`;
  }

  if (computerPicks == input) {
    myOutputValue = `The computer chose ${computerPicks}. You chose ${input}. It's a tie!`;
  }
  //reversed game
  if (
    (computerPicks == "paper" && input == "reversed rock") ||
    (computerPicks == "scissors" && input == "reversed paper") ||
    (computerPicks == "rock" && input == "reversed scissors")
  ) {
    myOutputValue = `The computer chose ${computerPicks}. You chose ${input}. You Won!`;
  }
  if (
    (computerPicks == "paper" && input == "reversed scissors") ||
    (computerPicks == "scissors" && input == "reversed rock") ||
    (computerPicks == "rock" && input == "reversed paper")
  ) {
    myOutputValue = `The computer chose ${computerPicks}. You chose ${input}. You Lost!`;
  }
  if (
    (computerPicks == "paper" && input == "reversed paper") ||
    (computerPicks == "scissors" && input == "reversed scissors") ||
    (computerPicks == "rock" && input == "reversed rock")
  ) {
    myOutputValue = `The computer chose ${computerPicks}. You chose ${input}. It's A Tie!`;
  }
  return myOutputValue;
};
