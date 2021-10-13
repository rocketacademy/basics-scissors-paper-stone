var main = function (userInputChoice) {
  var compFinalChoice = progChoice();
  var gameOutcome = "Please choose Rock or Scissors or Paper and try again!";
  if (userInputChoice == compChoice) {
    gameOutcome = "The game ends in a draw";
  }
  if (
    (userInputChoice == "Rock" && compChoice == "Scissors") ||
    (userInputChoice == "Scissors" && compChoice == "Paper") ||
    (userInputChoice == "Paper" && compChoice == "Rock")
  ) {
    gameOutcome = "You win the game!";
  }
  if (
    (userInputChoice == "Paper" && compChoice == "Scissors") ||
    (userInputChoice == "Scissors" && compChoice == "Rock") ||
    (userInputChoice == "Rock" && compChoice == "Paper")
  ) {
    gameOutcome = "You lose the game";
  }
  return gameOutcome;
};

//Computer inputs choices
var progChoice = function () {
  var randomNumber = Math.random() * 3;
  console.log(randomNumber);
  var randomNumberRounded = Math.floor(randomNumber);
  console.log(randomNumberRounded);
  if (randomNumberRounded == 0) {
    var compChoice = "Rock";
    console.log(compChoice);
  }
  if (randomNumberRounded == 1) {
    var compChoice = "Scissors";
    console.log(compChoice);
  }
  if (randomNumberRounded == 2) {
    var compChoice = "Paper";
    console.log(compChoice);
  }
  return compChoice;
};

// Scissors beats paper, paper beats stone, and stone beats scissors
// User win , lose or drwa
//
