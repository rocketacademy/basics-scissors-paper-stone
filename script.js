// Basic Scissors Paper Stone Project

var scissors = `scissors`;
var paper = `paper`;
var stone = `stone`;
var computerChoice = function (generateRandomNumber) {
  return generateRandomNumber;
};
var myOutputValue = `Please select either scissors, paper or stone to start the game.`;

//Computer Choice
var generateRandomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomNumber = Math.floor(randomDecimal);
  if (randomNumber == 0) {
    return scissors;
  }
  if (randomNumber == 1) {
    return paper;
  }
  if (randomNumber == 2) {
    return stone;
  }
};

var computerChoice = generateRandomNumber();

var tieScenario = function (userChoice, computerChoice) {
  if (
    userChoice == paper &&
    computerChoice == paper &&
    userChoice == scissors &&
    computerChoice == scissors &&
    userChoice == stone &&
    computerChoice == stone
  ) {
    myOutputValue = `It's a tie! You selected ${userChoice} and computer selected ${computerChoice}. Try again!`;
    return myOutputValue;
  }
};

var winScenario = function (userChoice, computerChoice) {
  if (
    userChoice == paper &&
    computerChoice == stone &&
    userChoice == scissors &&
    computerChoice == paper &&
    userChoice == stone &&
    computerChoice == scissors
  ) {
    myOutputValue = `Nice you won! You selected ${userChoice} and computer selected ${computerChoice}. Try your luck again!`;
    return myOutputValue;
  }
};

var loseScenario = function (userChoice, computerChoice) {
  if (
    userChoice == paper &&
    computerChoice == scissors &&
    userChoice == scissors &&
    computerChoice == stone &&
    userChoice == stone &&
    computerChoice == paper
  ) {
    myOutputValue = `Tough luck, you lost! You selected ${userChoice} and computer selected ${computerChoice}. Try your luck again!`;
    return myOutputValue;
  }
};

var main = function (input) {
  if (tieScenario) {
    return;
  }
};

//`The computer chose scissors ✂️. You chose ${paper} 🗒. You lose! Bummer. Now you can type "scissors" "paper" or "stone" to play another round!`
