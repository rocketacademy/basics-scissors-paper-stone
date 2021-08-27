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
  var myOutputValue =
    "You can only type 'Scissors', 'Paper' or 'Stone'. <br> Or try including the word 'Reverse' before your choice to play the reverse scissors, paper, stone game.";
  if (input.includes(progsChoice)) {
    myOutputValue = "It's a draw!";
  }
  if (
    (input == "Scissors" && progsChoice == "Paper") ||
    (input == "Paper" && progsChoice == "Stone") ||
    (input == "Stone" && progsChoice == "Scissors") ||
    (input == "Reverse Scissors" && progsChoice == "Stone") ||
    (input == "Reverse Stone" && progsChoice == "Paper") ||
    (input == "Reverse Paper" && progsChoice == "Scissors")
  ) {
    myOutputValue = "You win! Yay!";
  }
  if (
    (progsChoice == "Scissors" && input == "Paper") ||
    (progsChoice == "Paper" && input == "Stone") ||
    (progsChoice == "Stone" && input == "Scissors")
  ) {
    myOutputValue = "You lose! Sobbles.";
  }
  if (
    (input == "Reverse Scissors" && progsChoice == "Paper") ||
    (input == "Reverse Stone" && progsChoice == "Scissors") ||
    (input == "Reverse Paper" && progsChoice == "Stone")
  ) {
    myOutputValue = "You would've won if this was the normal game.";
  }
  return `${myOutputValue} <br> The computer chose ${progsChoice} and you chose ${input}. <br> Feel free to try again!`;
};

var rollDice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};
