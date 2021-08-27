var main = function (input) {
  var progsChoice = rollDice();
  if (progsChoice == 1) {
    progsChoice = "Scissors";
  }
  if (progsChoice == 2) {
    progsChoice = "Paper";
  }
  if (progsChoice == 3) {
    progsChoice = "Stone";
  }
  console.log(progsChoice);
  var myOutputValue = "You can only type 'Scissors', 'Paper' or 'Stone'.";
  if (input == progsChoice) {
    myOutputValue = "It's a draw!";
  }
  if (
    (input == "Scissors" && progsChoice == "Paper") ||
    (input == "Paper" && progsChoice == "Stone") ||
    (input == "Stone" && progsChoice == "Scissors")
  ) {
    myOutputValue = "You win!";
  }
  if (
    (input == "Scissors" && progsChoice == "Paper") ||
    (input == "Paper" && progsChoice == "Stone") ||
    (input == "Stone" && progsChoice == "Scissors")
  ) {
    myOutputValue = "You win!";
  }
  if (
    (progsChoice == "Scissors" && input == "Paper") ||
    (progsChoice == "Paper" && input == "Stone") ||
    (progsChoice == "Stone" && input == "Scissors")
  ) {
    myOutputValue = "You lose!";
  }
  return myOutputValue;
};

var rollDice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};
